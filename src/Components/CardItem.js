import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom'

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
  text : {
    marginLeft : '4px'
  },
  skeletonContent : {
  	height: 100,

  }
});

export default function CardItem(props) {
  const classes = useStyles();
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    setFetching(false)
  },[])

  const item = props.item

  return (
    <Card className={classes.root}>

    <Link style={{ color : 'black' }} to={'/items/' + item._id}>
      <CardActionArea>
        <Image 
        src={item.preview}/>
        <CardContent>
        {fetching ? (
        	<Skeleton className={classes.skeleton}/>
        	) : (
        		 <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
        )}
        {fetching ? (
        	<Skeleton className={classes.skeletonContent}/>
        	) : (
        <Typography variant="body2" color="textSecondary" component="p">
            Стул в современном дизайне отлично подходит к любому интерьеру 
        </Typography>
        	)}	
        </CardContent>
      </CardActionArea>
    </Link>
    {fetching ? (
      <Skeleton className={classes.skeleton}/>
      ) : (
        <Typography className={classes.text}
                alignRight={true} 
                color="primary" 
                variant="subtitle2">{item.price}тг.</Typography>

      )}
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