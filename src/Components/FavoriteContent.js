import React from 'react'
import './Favorite.css'
import FavoriteItem from './FavoriteItem'

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
					<FavoriteItem/>
				</div>
			</div>
		)
	}
}
export default Favorite