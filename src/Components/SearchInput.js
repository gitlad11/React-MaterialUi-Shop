import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';

function SearchInput(props){
	return (
		<div style={{ margin : "auto",
					   
					  position : "relative", 
					  height : "35px", 
					  width : "50%" }} >
			<input 
				   style={{ height : "inherit",
				   width : "100%",
				   border : "None",
				   borderBottom : "2px solid grey",
				   borderLeft : "2px solid lightgrey",
				   paddingLeft : "4px",
				   position  : "absolute" }}
				   placeholder="Поиск по названию"
				   />
			<IconButton  style={{ position : "absolute", "right" : "0px" }}>
				<SearchOutlinedIcon fontSize="medium" />
			</IconButton>			   
		</div>
		)
}
export default SearchInput;