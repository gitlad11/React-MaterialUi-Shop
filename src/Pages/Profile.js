import React from 'react'
import ProfileItem from '../Components/ProfileItem'
import Sidebar from '../Components/Sidebar'

function Profile(props){
	const number = localStorage.getItem("auth-user-number")
	const email = localStorage.getItem("auth-user-email")
	return ( 
		<div className="Profile">
			<ProfileItem number={number} email={email} />
			<Sidebar/>
		</div>
	 )
}
export default Profile
