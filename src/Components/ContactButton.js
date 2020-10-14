import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

function ContactButton({ contact, setContact }){
	const onContact = () => {
		if(contact){
			setContact(false)
		} else { setContact(true) }
	}
	return (
		<Tooltip title="Контакт">
			<Fab	onClick={onContact}
					style={{margin : '3px'}} 
					variant="extended"
					color="primary"
					aria-label="Контакт"
					variant="extended">
        				<PhoneIcon />
      		</Fab>
      	</Tooltip>	
	)
}
export default ContactButton;