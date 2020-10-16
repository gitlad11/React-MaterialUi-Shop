const http = require('http')
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3004

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname + '/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname,'./build'))
	})	
}
app.use(express.Router())
app.use(express.static(__dirname + './public'))

app.get('/', (req, res) => {
	res.send('Welcome to api!')
})

app.listen(PORT, console.log(`listen on PORT ${PORT}`))