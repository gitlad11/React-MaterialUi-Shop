const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

var UserSchema = new Schema({
	email : { 
		type : String, require : true, maxLength : 40
		},
	comfirmed : { 
		type : Boolean, default:false
	},
	number : {
		type : String, maxLength : 12
	},
	favorite : [],
	cart : [],	
})
UserSchema.plugin(require('mongoose-bcrypt'))

module.exports = mongoose.model('User', UserSchema)
