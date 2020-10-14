import React from 'react'
import ProfileItem from '../Components/ProfileItem'
import Sidebar from '../Components/Sidebar'
function Profile(props){
	return ( 
		<div className="Profile">
			<ProfileItem/>
			<Sidebar/>
		</div>
	 )
}
export default Profile
