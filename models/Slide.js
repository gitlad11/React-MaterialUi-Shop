const mongoose = require('mongoose')

const Schema = mongoose.Schema

var SlideSchema = new Schema({
	preview : { 
		type : String 
	},
	legend : { 
		type : String
	},	
})
module.exports = mongoose.model('Slide', SlideSchema)