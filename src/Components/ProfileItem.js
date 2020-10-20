import React from 'react'
import './Profile.css'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import DoneIcon from '@material-ui/icons/Done';
import ProfileCart from './ProfileCart'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

export default class ProfileItem extends React.Component{
	constructor(props){
	super(props)
	this.onProfileChange = this.onProfileChange.bind(this)
	this.onChangeEmail = this.onChangeEmail.bind(this)
	this.onChangeNumber = this.onChangeNumber.bind(this)
	this.onChangePassword = this.onChangePassword.bind(this)
	this.onSubmit = this.onSubmit.bind(this)
	this.state = {
		'change' : false,
		'message' : '',
		'email' : 'efimovi420@gmail.com',
		'number' : '87058671152',
		'password' : 'password'
	}
	}
	onProfileChange(){
		if(this.state.change){
			this.setState({ change : false })
		} else {
			this.setState({ change : true })
		}	
	}
	onChangeEmail(event){
		this.setState({email : event.target.value})
	}
	onChangeNumber(event){
		this.setState({number : event.target.value})
	}
	onChangePassword(event){
		this.setState({password : event.target.value})
	}
	onSubmit(){
		const user = localStorage.getItem("auth-user-email")
		const res = axios.post('/update', { 'email' : user, 'newEmail' : this.state.email, 'newNumber' : this.state.number },
								{ headers:{
										 	"Content-Type" : "application/json"
										 	}
										 }).then((response) => {
										 		if(response.status == 200){
										 			this.setState({ 'message' : 'Обновлено!' })
										 		} 
										 		if(response.status == 500){
										 			this.setState({ 'message' : 'Не получилось обновить профиль!' })
										 		} 
										 	})
	}
	componentDidMount(){
		this.setState({'email' : this.props.email, 'number' : this.props.number})
	}
	render(){
		if(this.state.change){
			return (
				<div className="profile-item">
				<div className='profile-info'>
					<div style={{ borderBottom : "1px dotted grey", display : "flex"}}>
						<EmailOutlinedIcon style={{marginTop: "20px","marginRight" : '2px'}} fontSize="small"/>
						<h5>Email адресс :</h5>
						<Input onChange={this.onChangeEmail} 
							   value={this.state.email} 
							   style={{ margin : "auto", marginLeft : "20px" }}/>
					</div>
					<div style={{ borderBottom : "1px dotted grey", display : "flex"}}>
						<PhoneAndroidOutlinedIcon style={{marginTop: "20px","marginRight" : '2px'}} fontSize="small"/>
						<h5>Номер телефона :</h5>
						<Input onChange={this.onChangeNumber}
							   value={this.state.number} 
							   style={{ margin : "auto", marginLeft : "20px" }}/>	
					</div>
					<div style={{ display : "flex" }}>
						<LockOutlinedIcon style={{marginTop: "20px", "marginRight" : '2px'}} fontSize="small"/>
						<h5>Пароль :</h5>
						<Input onChange={this.onChangePassword}
							   value={this.state.password} 
							   style={{ margin : "auto", marginLeft : "20px" }}/>

						<Tooltip title="Подтвердить">
							<IconButton onClick={this.onSubmit} style={{marginTop: "20px"}}>
								<DoneIcon fontSize="small"/>
							</IconButton>	
						</Tooltip>

						<Tooltip title="Изменить">
							<IconButton onClick={this.onProfileChange} style={{marginTop: "20px"}}>
								<CreateOutlinedIcon fontSize="small"/>
							</IconButton>	
						</Tooltip>

					</div>
				</div>
				<ProfileCart/>
			</div>
				)
		} else {
			return (
			<div className="profile-item">
				<div className='profile-info'>
					<div style={{ borderBottom : "1px dotted grey", display : "flex"}}>
						<EmailOutlinedIcon style={{marginTop: "20px","marginRight" : '2px'}} fontSize="small"/>
						<h5>Email адресс :</h5>
						<p style={{fontSize : "14px", margin : "auto", marginLeft : "20px" }}>{this.state.email}</p>
						
					</div>
					<div style={{ borderBottom : "1px dotted grey", display : "flex"}}>
						<PhoneAndroidOutlinedIcon style={{marginTop: "20px","marginRight" : '2px'}} fontSize="small"/>
						<h5>Номер телефона :</h5>
						<p style={{fontSize : "14px", margin : "auto", marginLeft : "20px"}}>{this.state.number}</p>
						
					</div>
					<div style={{ display : "flex" }}>
						<LockOutlinedIcon style={{marginTop: "20px", "marginRight" : '2px'}} fontSize="small"/>
						<h5>Пароль :</h5>
						<p style={{fontSize : "14px", margin : "auto", marginLeft : "20px"}}>{this.state.password}</p>
						
						<Tooltip title="Изменить">
							<IconButton onClick={this.onProfileChange} style={{marginTop: "20px"}}>
								<CreateOutlinedIcon fontSize="small"/>
							</IconButton>	
						</Tooltip>
					</div>
					{this.state.message !== '' ? (
							<Alert severity="info">{this.state.message}</Alert>
							) : (
							<div></div>
							)}
				</div>
				<ProfileCart/>
			</div>
		)
	}}}
