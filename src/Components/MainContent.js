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
import MoreData from './MoreItemsData'

function MainContent(props){
	const items = props.items
	const onFilter = props.onFilter
	const onFilterC = props.onFilterC
	const onSearch = props.onSearch

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
				<SearchInput onSearch={onSearch}/>
				<div className='filters'>
					<TypeFilter onFilter={onFilter}/>
					<SizeFilter onFilter={onFilter}/>
					<ColorFilter onFilterC={onFilterC}/>
				</div>
			</div>
		<div className='cards-list'>
 			<Grid container
  				  direction="row"
  				  justify="center"
  				  spacing={2}>
  				 {items.map((card) => (
  				<Grid item>
					<CardItem item={card} />
				</Grid>
  				 ))} 		
			</Grid>
		</div>
		</div>
			<Sidebar/>
		</div>
		)
}
export default MainContent