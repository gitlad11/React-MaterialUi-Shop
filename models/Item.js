const mongoose = require('mongoose')

const Schema = mongoose.Schema

var ItemSchema = new Schema({
	title : {
		type : String
	},
	preview : {
		type : String
	},
	height : {
		type : Number
	},
	width : {
		type : Number
	},
	color : {
		type : String
	},
	type : {
		type : String
	},
	price : {
		type : String
	},
	sale : {
		type : String
	},
	images : []

})
module.exports = mongoose.model('Item', ItemSchema)