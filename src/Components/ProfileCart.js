import React from 'react'
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import history from '../history'
import Empty from './Empty'

import Grid from '@material-ui/core/Grid';

import FavoriteItem from './FavoriteItem'



function ProfileCart(){

	const onMain = () => {
		history.push('/')
	}
	return (
			<div className='profile-cart'>
			 	   	<Box style={{ height : "15%" }} display="flex" justifyContent="flex-end" className='profile-nav'>
				    	<IconButton color="secondary" onClick={() => {onMain()}} style={{ margin : "4px" }} size="medium" >
				    		<CloseIcon fontSize="medium"/>
				    	</IconButton>
				   </Box>
				   <div style={{ height : '84%' }} >
				   	<h5 style={{ margin : "0px" }}>Избранное</h5>
				   		<div style={{ height : '74%', 
				   				 width : "96%",
				   				 margin : "10px", 
				   				 backgroundColor : "#dedede", 
				   				 overflowY : "scroll",
				   				 boxShadow: "0 0 4px rgba(0,0,0,0.4) inset" }}>
				   		<Grid direction="column"
				   			  justify="center"
  							  alignItems="center"
				   			  spacing={2}
				   			  >
				   			<Grid item>  
				   				<Empty text="Ваш список избранных пустой. Добавте в избранное чтобы получать уведомление о скидках" />
				   			</Grid>
				   		</Grid>	
				   		</div>
				   	</div>		
			</div>
	)
}
export default ProfileCart