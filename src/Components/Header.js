import React from 'react'
import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import LoginPopUp from './LoginPopup'
import RegisterPopup from './RegisterPopup'
import UserCard from './UserCard'
import Context from '../Context'



class Header extends React.Component{
	constructor(props){
		super(props)
		this.onOpenLogin = this.onOpenLogin.bind(this)
		this.onOpenRegister = this.onOpenRegister.bind(this)
		this.onClose = this.onClose.bind(this)
		this.state = {
			openLogin : false,
			openRegister : false,
			authUser : 0
		}

	}
	onOpenLogin(){
		this.setState({openLogin : true})
	}
	onOpenRegister(){
		this.setState({openRegister : true})
	}
	onClose(){
		this.setState({ openLogin : false, openRegister : false })
	}
	componentDidMount(){
		const Auth = localStorage.getItem("auth-user-email")

		if(Auth){
			this.setState({ authUser : Auth})
		} else {
			this.setState({ authUser : 0 })
		}
	}
	render(){

		const User = this.state.authUser

		return(

			<div className="header">
				<div className='header-wrapper'>
					<div className='navbar'>
						<div className='navigation'>
							<Link to="/" className='link-btn'>
								<Button style={{ textShadow: '3px 1px 2px rgba(150, 150, 150, 1)',
												 fontSize: '17px', color : "#2b2b2b" }}
										startIcon={<HomeOutlinedIcon/>}>Главная</Button>
							</Link>
							<Link to="/sales" className='link-btn'>
								<Button style={{ textShadow: '3px 1px 2px rgba(150, 150, 150, 1)',
												 fontSize: '17px', color : "#2b2b2b" }}
										startIcon={<LoyaltyOutlinedIcon/>}>Скидки</Button>
							</Link>
							<Link to="/cart" className='link-btn'>
								<Button style={{ textShadow: '3px 1px 2px rgba(150, 150, 150, 1)',
												 fontSize: '17px', color : "#2b2b2b" }}
										startIcon={<ShoppingCartOutlinedIcon/>}>Корзина</Button>
							</Link>
						</div>
						{this.state.authUser == 0 ? (
						<div className='btn-box'>
						<Button onClick={this.onOpenLogin}
								style={{ margin : "3px" }}
								variant="contained"
								color="primary"
								startIcon={<ExitToAppOutlinedIcon/>}>
								Вход
						</Button>
						<Button onClick={this.onOpenRegister}
								style={{ margin: "3px" }}
								variant='outlined'
								color = "primary"
								startIcon={<LockOpenOutlinedIcon/>}>
								Регистрация</Button>
						</div>	
							) : (
							<UserCard User={User} />
							)}
					</div>
				</div>
				<LoginPopUp open={this.state.openLogin}
							onClose={this.onClose}/>
				<RegisterPopup open={this.state.openRegister}
							onClose={this.onClose} />
			</div>

			)
	}
}
export default Header;