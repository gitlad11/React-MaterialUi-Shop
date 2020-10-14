import React from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Input from './Input'
import Button from '@material-ui/core/Button';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import Tooltip from '@material-ui/core/Tooltip';

function LoginPopup(props){
	const open = props.open
	const onClose = props.onClose
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [show , setShow ] = React.useState(false)

	const emailChange = (event) => {
		setEmail(event.target.value)
	}

	const passwordChange = (event) =>{
		setPassword(event.target.value)
	}

	const onShow = () => {
		if(show){
			setShow(false)
		} else {
			setShow(true)
		}
	} 

	const onSubmit = (event) => {
		event.preventDefault()
		alert(password)
	}
	return(
		<div style={{ minWidth : "400px", minHeight : "500px" }}>
			<Dialog open={open} 
					onClose={onClose}>
					<DialogTitle style={{margin : 'auto'}} id="form-title">Вход</DialogTitle>
					<DialogContent>
						<DialogContentText>Ваш адресс Эл. почты</DialogContentText>
						<Input icon="email"
							   onChange={emailChange} label="" 
							   placeholder="Email адресс"/>
						<br/>	   
						<DialogContentText>Ваш Пароль</DialogContentText>
						<Input onChange={passwordChange}
							   type={ show ? "text" : "password"}
							   placeholder="Пароль"/>	   
						{ show ? (
							<Tooltip title="Скрыть пароль">
							<VisibilityOffOutlinedIcon onClick={onShow}
													   style={{ cursor : "pointer",
													   			marginLeft : "50%", 
													   			marginTop : '5px'}}/>
							</Tooltip>						   			
						) : (
							<Tooltip title="Показать пароль">
							<VisibilityOutlinedIcon onClick={onShow}
													style={{ cursor : "pointer", 
															 marginLeft : "50%",
															 marginTop : '5px'}}/>
							</Tooltip>								 
						)}		   
						<br/>	   
					</DialogContent>
					<DialogActions style={{ margin : 'auto',
											width : "400px",
										   justifyContent : "space-between"}} >
 
          			<Button onClick={onSubmit}
          					variant="contained"
          					color="primary">
            			Войти
          			</Button>

          			<Button onClick={onClose}
          					variant="contained"
          					color="secondary">
            			Отмена
          			</Button>
        			</DialogActions>
        			<br/>
					</Dialog> 
		</div>
	)
}
export default LoginPopup;