import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Image from 'material-ui-image'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles({
  root: {
    width: 325,
    border : "1px solid lightgrey"
  },
  media: {
    height: 140,
  },
  skeleton : {
  	height: 40,

  },
  skeletonContent : {
  	height: 100,

  }
});

export default function CardItem(props) {
  const classes = useStyles();
  const [fetching, setFetching] = useState(false)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Image 
        src="https://res.cloudinary.com/du8f2setm/image/upload/v1602140488/samples/qwm3tmpodg9wtf4jwknh.jpg"/>
        <CardContent>
        {fetching ? (
        	<Skeleton className={classes.skeleton}/>
        	) : (
        		 <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        )}
        {fetching ? (
        	<Skeleton className={classes.skeletonContent}/>
        	) : (
        <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
        </Typography>
        	)}	
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent : "space-between" }}>
        <Button size="small" 
        		color="primary"
        		startIcon={<AddShoppingCartIcon/>}>
          В корзину
        </Button>
        <Button size="small" 
        		color="primary"
        		startIcon={<BookmarkBorderRoundedIcon/>}>
          В избранное
        </Button>
      </CardActions>
    </Card>
  );
}