import React from 'react'
import history from '../history'
import Fab from '@material-ui/core/Fab';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import Tooltip from '@material-ui/core/Tooltip';

function FavoriteButton(props){
	const onFavorite = () =>{
		history.push('/favorite')
	}
	return (
		<Tooltip title="Избранное">
		<Fab onClick={onFavorite} 
			style={{margin : '3px'}}
      		color="secondary"
      		aria-label="Избран."
			variant="extended">
        			<BookmarkBorderRoundedIcon/>
      	</Fab>
      	</Tooltip>
	)
}
export default FavoriteButton;