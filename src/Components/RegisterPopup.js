import React from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Input from './Input'
import Button from '@material-ui/core/Button';
import "../App.css"
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import ReCAPTCHA from "react-google-recaptcha";
import Alert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';


function RegisterPopup(props){
	const open = props.open
	const onClose = props.onClose
	const [email , setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [password2, setPassword2] = React.useState('')
	const [valid, setValid] = React.useState(true)
	const [show , setShow ] = React.useState(false)
	const [verify , setVerify] = React.useState()

	const emailChange = (event) =>{
		setEmail(event.target.value)
	}
	const passwordChange = (event) => {
		setPassword(event.target.value)
	}
	const passwordChange2 = (event) => {
		setPassword2(event.target.value)
	}
	const onSubmit = (event) => {
		event.preventDefault()
		if(verify == undefined){
			setVerify(false)
		}
		if(password === password2){
			alert('matchs')
		} else {
			alert('not matchs')
		}
	}
	const onShow = () => {
		if(show){
			setShow(false)
		} else {
			setShow(true)
		}
	} 
	const onVerify = (response) => {
		if(response){
			setVerify(true)
		} else {
			setVerify(false)
		}
	}
	React.useEffect(() => {
		if(password !== password2){
			setValid(false)
		} else {
			setValid(true)
		}
	},[password2,password])
	return(
		<div style={{ minWidth : "400px", minHeight : "500px" }}>
			<Dialog open={open} 
					onClose={onClose}>
					<DialogTitle style={{margin : 'auto'}} id="form-title">Регистрация</DialogTitle>
					<DialogContent>
						<DialogContentText>Ваш адресс Эл. почты</DialogContentText>
						<Input icon="email"
							   onChange={emailChange} label="" 
							   placeholder="Email адресс"/>
						<br/>
						<br/>	   
						<DialogContentText>Придумайте Пароль</DialogContentText>
						<Input icon="password"
							   className={valid ? "validInput" : "notValidInput"}
							   onChange={passwordChange} label=""
							   placeholder="Пароль"
							   type={ show ? "text" : "password"}/>
						<br/>	   
						<DialogContentText className={valid ? "valid" : "notValid"}>
								{ valid ?  "Повторите Пароль" : "Пароли не совпадают" }
							</DialogContentText>
						<Input icon="password"
							   className={valid ? "validInput" : "notValidInput"}
							   onChange={passwordChange2} label=""
							   placeholder="Пароль"
							   type={ show ? "text" : "password"}/>   
						{ show ? (
							<Tooltip title="Скрыть Пароль">
							<VisibilityOffOutlinedIcon onClick={onShow}
													   style={{cursor : "pointer", 
													   		   marginLeft : "50%", 
													   		   marginTop : '5px'}}/>
							</Tooltip>					   		   
						) : (
							<Tooltip title="Показать пароль">
							<VisibilityOutlinedIcon onClick={onShow}
													style={{cursor : "pointer", 
															marginLeft : "50%", 
															marginTop : '5px'}}/>
							</Tooltip>								
						)}	   
						<br/>	   
					</DialogContent>
					<div style={{ margin : "auto" }}><ReCAPTCHA sitekey="6LcKqNUZAAAAAG75O5kSVz93K15YcCiD0N3zGkjm"
							   onChange={onVerify}/></div>
					<DialogActions style={{ margin : "auto",
											width : "400px",
										   justifyContent : "space-between"}} >
 
          			<Button onClick={onSubmit}
          					variant="contained"
          					color="primary">
            			Подтвердить
          			</Button>

          			<Button onClick={onClose}
          					variant="contained"
          					color="secondary">
            			Отмена
          			</Button>
        			</DialogActions>
        			<br/>
        			{verify == false ?  (
        				 <Alert severity="error">Подтвердите что вы не робот</Alert>
        				) : ( <div></div> )}

        			</Dialog>
		</div>
		)
}
export default RegisterPopup;