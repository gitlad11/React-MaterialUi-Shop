import React , { useState, useEffect } from 'react'
import './Item.css'
import ImagesForSlider from './ImagesForSlider'
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Axios from 'axios'

function ItemContent(props){
    const item = props.item
     console.log(item)

      return(
			<div className='item-box'>
			<div style={{ boxShadow : '0 0 9px rgba(0,0,0,0.2)', width : '50%' }}>
			<Carousel showThumbs={true}
					  showStatus={false} 
                      infiniteLoop={true} 
                      autoPlay={true}
                      interval={3000}>
               {item.images.map((slide) =>
              <div style={{ cursor : "pointer" }}>
                    <img src={slide.url} />
              </div>
            	)}
                </Carousel> 
             </div>
             <div className="item-info" >
             	<div style={{ height : "60%" }}>
             		<Typography style={{ maxHeight : "60px", overflowY : "hidden", borderBottom : '1px solid grey' }} gutterBottom variant="h5" component="h4">
            				{item.title}

          			</Typography>
             		<Typography align='left' style= {{  marginBottom : '50px' }}  color='textPrimary' gutterBottom variant="subtitle1" component="p">
            				{item.description}
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
          					Цвет : {item.color}
          			</Typography>
          			<Typography align='left'  
          					color='textPrimary' 
          					variant='subtitle2' 
          					component='h3'>
          					Высота : {item.height}см.
          			</Typography>
          			<Typography align='left'
          					color='textPrimary'
          					variant='subtitle2' 
          					component='h3'>
          					Ширина : {item.width}см. 
          			</Typography>
          			<Typography align='left'
          					color='textPrimary' 
          					variant='subtitle2' 
          					component='h3'>
          					В наличии : {item.count}шт. 
          			</Typography>
                </div>
          		</div>
              <div style={{ width : "100%", display : "flex", "justifyContent" : "flex-end", 'alignItems' : 'center' }}>
                <Typography 
                              alignRight={true} 
                              color="primary" 
                              variant="subtitle2">{item.price}тг.- 
                              <span style={{ color : 'red' }}></span></Typography>
                  <Button style={{marginLeft : '4px' }}
                          size="medium"
                          color="primary"
                          startIcon={<ShoppingBasketIcon/>}>
                                  Заказать
                  </Button>
                  <Tooltip title="Поделиться">
                                  <IconButton aria-label="Share" style={{margin : '5px'}} size="small">
                                      <ShareIcon fontSize="medium" />
                                   </IconButton>
                    </Tooltip>
                </div>
             </div>        
			</div>
		)
}
export default ItemContent