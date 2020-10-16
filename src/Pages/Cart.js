import React from 'react'
import Header from '../Components/Header'
import CartContent from '../Components/CartContent'
import Sidebar from '../Components/Sidebar'

function Cart(props){
	return (
		<div className="Cart">
			<Header/>
			<CartContent/>
			<Sidebar/>
		</div>
	)
}
export default Cart 