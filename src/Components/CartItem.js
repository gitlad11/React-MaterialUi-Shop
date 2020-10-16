import React, { useState } from 'react'
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'
import ItemData from './ItemsData'

const useStyles = makeStyles({
  root: {
    width: '98%',
    minHeight: 120,
    height: 245,
    margin : 'auto',
    marginTop : '2px',
    border : "1px solid lightgrey"
  },
  skeleton : {
  	height: 40,
    width : '90%'

  },
  button : {
  	margin : '5px', 
  },
  text : {
  	marginRight: '10px',
  	fontSize : '14px'
  },
  skeletonContent : {
  	height: 120,
    width : '90%'

  }
});

function CartItem(){
	const classes = useStyles();
  const [fetching, setFetching] = useState(false)
	return (
		<Card className={classes.root} 
			  style={{ display : "flex" }}>
				   				<div style={{ margin : 'auto', width : '50%', height : "100%" }}>
                    <Link to='/items'>
				   						<Image cover={true} imageStyle= {{  width : 'inherit', height : 'inherit'}} style={{height : '40%' }}
        								src="https://res.cloudinary.com/du8f2setm/image/upload/v1602752958/Stol_kcns02.jpg"/>
                    </Link>
                      </div>
        								<div style={{'justifyContent' : 'space-between', width : '50%', height : '100%', display : 'flex', flexDirection : 'column' }}>
        										<div style={{ display : 'flex', justifyContent : 'space-between' }}>
                              { fetching ? (
                                <Skeleton className={classes.skeleton} />
                                ) : (
                                <Typography style={{ overflow: 'hidden', 
                                           textOverflow : 'ellipsis',
                                           whiteSpace: 'nowrap' }} gutterBottom variant="subtitle1">
                                      Стол кухонный 'Столен Прайм' 
                                </Typography>
                                )}
                                			<div style={{ justifyContent : 'flex-end' }}>
                                				<Tooltip title="Поделиться">
                                					<IconButton aria-label="Share" style={{margin : '5px'}} size="small">
          												<ShareIcon fontSize="medium" />
        											</IconButton>
        										</Tooltip>
        										<Tooltip title="Удалить">
                									<IconButton  aria-label="delete" style={{margin : '5px'}} size="small">
          												<DeleteIcon fontSize="medium" />
        											</IconButton>
        										</Tooltip>
  											</div>
  											
                								</div>
                								{ fetching ? (
                                  <Skeleton className={classes.skeletonContent}/>
                                  ) : (
                                  <Typography style={{  width : "90%", 
                                            overflow: 'hidden', 
                                            textOverflow : 'ellipsis' }} variant="body2" gutterBottom>
                                      Стол кухонный , древесный , производство: Россия. Высота: 1 метр, Ширина : 2.5 метра
                                </Typography>
                                  )}
                								
                							<div style={{ display : 'flex', 'justifyContent' : 'flex-end', alignItems : 'center'}}>
                              { fetching ? (
                                <Skeleton className={classes.skeleton}/>
                                ) : (
               									<Typography className={classes.text}
               												alignRight={true} 
               												color="primary" 
               												variant="subtitle2">55.500тг.- <span style={{ color : 'red' }}>7.200тг</span> = 43.300тг</Typography>
                                )}
                          <Button 
                                  size="medium"
                              color="primary"
                              startIcon={<ShoppingBasketIcon/>}>
                                  Заказать
                          </Button>
        									</div>
                						</div>
				   				</Card>
		)
}
export default CartItem;