import React, { useState } from 'react'

import ContactButton from './ContactButton'
import FavoriteButton from './FavoriteButton'
import ScrollButton from "./ScrollButton"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Sidebar(props){
	const [contact , setContact] = useState(false)
	const [message , setMessage] = useState('')

	const messageChange = (event) => {
		setMessage(event.target.value)
		console.log(message)
	}
	const onSubmit = () => {
		setMessage('')
	}
	return(
		<div className="sidebar"
					 style={{ position : "sticky", 
								bottom : "4px",
								left : "4px",
								display: "flex",
								maxWidth : "55px",
								flexDirection : "column"}}>			
					<ContactButton contact={contact} setContact={setContact}/> 
					{contact ? (
						<div style={{ position : 'absolute', 
      							  height : '150px', 
      							  width : '240px', 
      							  border : '1px solid grey', 
      							  'bottom' : '120px', 
      								'left' : '60px',
      								'borderRadius' : '5px',
      								'backgroundColor' : '#fff' }} >
      								<div style={{ height : '30px', 
      												width : '100%', 
      												backgroundColor : '#6f43e8',
      												'borderRadius' : '4px', 
      												borderBottom : '1px solid #8053ad',
      												color : 'white' ,
      												textAlign : 'center',
      												alignItems : 'center',
      												paddingTop : '4%',
      												justifyContent : 'center'}}>			
      									Связаться
      								</div>
      									<form style={{ width : '100%' }}>
      										 <TextField value={message}
      										 			onChange={messageChange}
      										 			size="medium" 
      										 			style={{ margin : '7px' }} 
      										 			id="outlined-basic" 
      										 			label="Сообщение" 
      										 			variant="outlined" />
      										<Button onClick={onSubmit}
      												size='small' 
      												style={{width : "100%"}}>
        										Отправить
      										</Button>
      									</form>
      								</div>
						) :(
						<div></div>
						)}     						
					<FavoriteButton/>				
					<ScrollButton scrollStepInPx="100" delayInMs="16.66" />
				</div>
		)
}
export default Sidebar