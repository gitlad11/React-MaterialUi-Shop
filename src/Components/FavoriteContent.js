import React from 'react'
import './Favorite.css'
import FavoriteItem from './FavoriteItem'
import Empty from './Empty'

class Favorite extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='favorite-box'>
			<div className='favorite-nav'>
				<h3>Избранное</h3>
			</div>
				<div style={{ overflowY : 'scroll', height : '950px' }}>
					<Empty text="Ваш список избранных пустой. Добавте в избранное чтобы получать уведомление о скидках"/>
				</div>
			</div>
		)
	}
}
export default Favorite