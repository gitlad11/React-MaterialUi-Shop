import React, { useState } from 'react'
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '98%',
    minHeight: 120,
    height: 205,
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
  skeletonContent : {
  	height: 120,
    width : '90%'

  }
});

function FavoriteItem(){
	const classes = useStyles();
  const [fetching, setFetching] = useState(false)
	return (
		<Card className={classes.root} 
			  style={{ display : "flex" }}>
				   					<div style={{ margin : 'auto', width : '50%', height : "100%" }}>
                    <Link to="/items">
				   						<Image imageStyle= {{ width : 'inherit', height : 'inherit'}} style={{ height : '50%' }}
        								src="https://res.cloudinary.com/du8f2setm/image/upload/v1602140488/samples/qwm3tmpodg9wtf4jwknh.jpg"/>
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
                                      Standard license Standard
                                </Typography>
                                )}

                						<div style={{ width : '45px',  justifyContent : 'flex-end' }}>

                            <Tooltip title="Удалить">
                                <IconButton  aria-label="delete" style={{margin : '5px'}} size="small">
                                  <DeleteIcon fontSize="medium" />
                                </IconButton>
                            </Tooltip>
                              <Tooltip title="Поделиться">
                                  <IconButton aria-label="Share" style={{margin : '5px'}} size="small">
                                      <ShareIcon fontSize="medium" />
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
                                      Full resolution 1920x1080 • JPEG Full resolution 1920x1080 • JPEG F
                                </Typography>
                                  )}
                								
                							<div style={{ display : 'flex', 'justifyContent' : 'flex-end', alignItems : 'center'}}>
                              { fetching ? (
                                <Skeleton className={classes.skeleton}/>
                                ) : (
               									<Typography 
               												alignRight={true} 
               												color="primary" 
               												variant="subtitle2"><span style={{ color : 'red' }}></span> 10.000тг</Typography>
                                )}
               								<Button 
               										size="small"
        											color="primary"
        											startIcon={<AddShoppingCartIcon/>}>
          												В корзину
        									</Button>
        									</div>
                						</div>
				   				</Card>
		)
}
export default FavoriteItem;