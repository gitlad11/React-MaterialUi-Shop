import React from 'react'

import CarouselComponent from './CarouselComponent'
import Button from '@material-ui/core/Button';
import SearchInput from './SearchInput'
import CardItem from "./CardItem"
import Grid from '@material-ui/core/Grid';
import ImagesForSlider from './ImagesForSlider'
import Sidebar from './Sidebar'
import TypeFilter from './TypeFilter'
import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'

function MainContent(){
	return (
		<div className='main-content'>
		<div className="main-preview">
			<div className="main-wrapper">
				<div className="heading">
					<h2>Мебель для всех!</h2>
					<p>Присоеденяйтесь к нам!</p>
					<Button 	style={{ color: 'white',
								 margin : "3px",  
								 background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
								variant="outlined"
								color="default">
								Присоедениться
					</Button>
					<br/>	
				</div>
			</div>
		</div>
			<br/>
		<CarouselComponent/>
		<div className='cards-content'>
			<div className='cards-filter'>
				<SearchInput/>
				<div className='filters'>
					<TypeFilter/>
					<SizeFilter/>
					<ColorFilter/>
				</div>
			</div>
		<div className='cards-list'>
 			<Grid container
  				  direction="row"
  				  justify="center"
  				  spacing={2}>
  				<Grid item>
					<CardItem/>
				</Grid>
				<Grid item>
					<CardItem/>
				</Grid>	
				<Grid item>
					<CardItem/>
				</Grid>
				<Grid item>
					<CardItem/>
				</Grid>			
			</Grid>
		</div>
		</div>
			<Sidebar/>
		</div>
		)
}
export default MainContent