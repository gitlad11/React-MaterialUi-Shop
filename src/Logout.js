import React from 'react'

function Logout(){
	localStorage.removeItem("auth-token")
	localStorage.removeItem("auth-user-email")
	window.location.reload()
}
export default Logout