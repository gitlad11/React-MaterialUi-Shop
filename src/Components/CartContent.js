import React from 'react'
import './Cart.css'
import CartItem from './CartItem'
import Empty from './Empty'

class CartContent extends React.Component{
	render(){
	return (
		<div className="cart-box">
			<div className='cart-nav'>
				<h3>Корзина</h3>
			</div>
				<div style={{ overflowY : 'scroll', height : '950px' }}>
					<CartItem/>
				</div>
		</div>
		)
	}
}
export default CartContent