import React from 'react'
import Axios from 'axios'

async function Authentication(){
	var token = localStorage.getItem("auth-token")
	if(token == null){
		localStorage.setItem("auth-token", "")
		token = "" 
	}
	const User = await Axios.post('/auth', null, 
									{headers : {
											"auth-token" : token
										}
									}).then((response) => {
										localStorage.setItem("auth-user-email" , response.data.email)
										localStorage.setItem("auth-user-number", response.data.number)
									}) 
}
export default Authentication