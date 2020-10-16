import React , { useState, useEffect } from 'react'
import './Item.css'
import ImagesForSlider from './ImagesForSlider'
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



class ItemContent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
				"title" : "",
				"preview" : "",
				"description" : "",
				"height" : "",
				"width" : "",
        "count" : "",
				"images" : []
			}
	}
	componentDidMount(){
		this.setState({ title : this.props.item.title , 
						preview : this.props.item.preview, 
						description : this.props.item.description,
						height : this.props.item.height,
						width : this.props.item.width,
            count : this.props.item.count,
            price : this.props.item.price,
						images : this.props.item.images,
            sale : this.props.item.sale
					})
	}
	render(){
		console.log(this.state.slides)
		return(
			<div className='item-box'>
			<div style={{ boxShadow : '0 0 9px rgba(0,0,0,0.2)', width : '50%' }}>
			<Carousel showThumbs={false}
					  showStatus={false} 
                      infiniteLoop={true} 
                      autoPlay={true}
                      interval={3000}>
               {this.state.images.map((slide) =>
              <div style={{ cursor : "pointer" }}>
                    <img src={slide.url} />
              </div>
            	)}
                </Carousel> 
             </div>
             <div className="item-info" >
             	<div style={{ height : "60%" }}>
             		<Typography style={{ maxHeight : "60px", overflowY : "hidden", borderBottom : '1px solid grey' }} gutterBottom variant="h5" component="h4">
            				{this.state.title}
          			</Typography>
             		<Typography align='left' style= {{  marginBottom : '50px' }}  color='textPrimary' gutterBottom variant="subtitle1" component="p">
            				{this.state.description}
          			</Typography>
          		</div>
          		<div style={{ marginLeft :  "20px", 
                            width : '100%',  
                            display : 'flex', 
                            justifyContent : "space-between"}} >
              <div>
          			<Typography align='left'  
          					color='textPrimary' 
          					variant='subtitle2' 
          					component='h3'>
          					Цвет : {this.state.color}
          			</Typography>
          			<Typography align='left'  
          					color='textPrimary' 
          					variant='subtitle2' 
          					component='h3'>
          					Высота : {this.state.height}см.
          			</Typography>
          			<Typography align='left'
          					color='textPrimary'
          					variant='subtitle2' 
          					component='h3'>
          					Ширина : {this.state.width}см. 
          			</Typography>
          			<Typography align='left'
          					color='textPrimary' 
          					variant='subtitle2' 
          					component='h3'>
          					В наличии : {this.state.count}шт. 
          			</Typography>
                </div>
          		</div>
              <div style={{ width : "100%", display : "flex", "justifyContent" : "flex-end", 'alignItems' : 'center' }}>
                <Typography 
                              alignRight={true} 
                              color="primary" 
                              variant="subtitle2">{this.state.price}тг.- 
                              <span style={{ color : 'red' }}>{this.state.sale}</span> = 
                              {Number(this.state.price - this.state.sale)}00тг</Typography>
                  <Button style={{marginLeft : '4px' }}
                          size="medium"
                          color="primary"
                          startIcon={<ShoppingBasketIcon/>}>
                                  Заказать
                          </Button>
                </div>
             </div>        
			</div>
		)
	}	
}
export default ItemContent