const http = require('http')
const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const bcrypt = require('bcrypt')
const config = require('./config')
const app = express()

const MongoURI = config.DB_URI || process.env.DATABASE_URL
const PORT = process.env.PORT || 3004


if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname + '/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname,'./build'))
	})	
}

app.use(express.Router())
app.use(express.static(__dirname + './public'))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use(cors({
	origin : "http://localhost:3000" || process.env.URL ,
	credentials : true
}))

cloudinary.config({
	cloud_name : config.CLN || process.env.CLOUD_NAME,
	api_key : config.CLK || process.env.CLOUD_KEY,
	api_secret : config.CLS || process.env.CLOUD_SECRET
})
const Storage = new CloudinaryStorage({
	cloudinary : cloudinary,
	params : {
		folder : 'mebel'
	},
	filename : (req, file, callback) => {
		callback(null, file.fieldname + '-' + Date.now())
	}
})

var imgFilter = (req, file , callback) =>{
	if(file.mimetype === "image/png" ||
	 	file.mimetype === "image/jpg" || 
	 	file.mimetype === "image/jpeg"){
		callback(null, true)
	} else {
		callback(null , false)
	}
}
multer({
  limits: { fieldSize: 25 * 1024 * 1024 }
})
var imgHandler = multer({ storage : Storage, fileFilter : imgFilter })

const User = require('./models/User')
const Item = require('./models/Item')
const Slide = require('./models/Slide')

mongoose.connect(MongoURI,
			{useNewUrlParser: true, useUnifiedTopology : true}, (error) =>{
			mongoose.Promise = global.Promise
			mongoose.connection.on('error', error => {
				console.log(`error with mongodb :` + error)
			})
			console.log('connected to collection ')
			})
app.listen(PORT, console.log(`listen on PORT ${PORT}`))

app.get('/', (req, res) => {
	res.send('Welcome to api!')
})
app.post('/reg', (req, res) => {
	console.dir(req.body)
	const user = new User({
		email : req.body.email,
		number : req.body.number || '',
		password : req.body.password
	})
	user.save().then((user) => {
		const token = jwt.sign({ id : user._id }, "secret", { expiresIn : 1000000 })
		res.status(201).json({ 'number' : user.number, 'email' : user.email , 'token' : token })
	}).catch((error) => {
		console.log(error)
		res.status(500).json({ 'error' : 'Ошибка регистрации' })
	})
})
app.post('/login', (req, res) => {
	console.dir(req.body)
	User.findOne({ email : req.body.email }).then((user) =>{
		if(!user){
			return res.status(400).json({ 'error' : 'Пользователь не найден' })
		} else {
			user.verifyPassword(req.body.password).then((valid) =>{
				if(valid){
					const token = jwt.sign({ id : user._id }, "secret", { expiresIn : 1000000 })
					return res.status(200).json({'number' : user.number, 'email' : user.email , 'token' : token })
				} else {
					return res.status(401).json({ 'error' : 'Неправильный пароль' })
				}
			})
		}
	})
})
app.post('/auth', async (req, res) => {
	const token = req.get("auth-token")
	if(!token){
		return res.status(401).json({ error : "Не авторизован!" })
	} else {
		const True = jwt.verify(token, "secret")
			if(!True){ 
				return res.json(false) 
			}
		const Profile = await User.findById(True.id).then((user) => {
			if(!user){
				return res.status(400).json({ 'user' : {} })
			} else  {
				return res.status(200).json({ 'id' : user._id, 'number' : user.number, 'email' : user.email })
			}
		})		
	}
})
app.post('/update', async (req, res) => {
	User.findOneAndUpdate({ 'email' : req.body.email }, 
		{$set: { 'email' : req.body.newEmail, 'number' : req.body.newNumber}},{upsert: true}, (error,result) =>{
			if(error){
				return res.status(500).json({ error : "Не получилось обновить пользователя!" })
			} else { return res.status(200).json({ message : "Обновлено!" }) }
		})
})
app.post('/item', async (req, res) => {
	console.log(req.body)
	Item.findById(req.body.id).then((item) => {
		if(item){
			res.status(200).json({ 'item' : item })
		}
	})
})
app.get('/items', async(req, res) => {
	Item.find({}).then((items) => {
		res.json({ 'items' : items })
	})
})
app.get('/slides', async(req, res) => {
	Slide.find({}).then((slides) => {
		res.json({ 'slides' : slides })
	})
})
app.post('/search', async(req, res) => {
	Item.find({ 'type' : req.body.query }).then((filter) => {
		res.json({ 'filter' : filter })
	})
})
app.post('/searchColor', async(req, res) =>{
	Item.find({ 'color' : req.body.query }).then((filter) => {
		res.json({ 'filter' : filter })
	})
})
app.post('/query', async (req, res) =>{
		if(req.body){
			const query = req.body.query
		if(query.length > 0 || query !== null){	
			Item.find({ 'title' : new RegExp(query) }).then((result) =>{
				return res.json({ 'filter' : result })
						})
	} else { return res.json([]) }
}	
})