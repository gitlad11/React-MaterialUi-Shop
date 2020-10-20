import React, { useState } from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';

function SearchInput(props){
	const onSearch = props.onSearch
	const [query, setQuery] = useState('')

	const onSearching = (event) => {
		setQuery(event.target.value)
		console.log(query)
	}
	const onChoose = () => {
		onSearch(query)
	}
	return (
		<div style={{ margin : "auto",
					   
					  position : "relative", 
					  height : "35px", 
					  width : "50%" }} >
			<input onChange={onSearching}
				   value={query}
				   style={{ height : "inherit",
				   width : "100%",
				   border : "None",
				   borderBottom : "2px solid grey",
				   borderLeft : "2px solid lightgrey",
				   paddingLeft : "4px",
				   position  : "absolute" }}
				   placeholder="Поиск по названию"
				   />
			<IconButton onClick={() => { onChoose() }} style={{ position : "absolute", "right" : "0px" }}>
				<SearchOutlinedIcon fontSize="medium" />
			</IconButton>			   
		</div>
		)
}
export default SearchInput;