import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function ColorFilter(props){
	const [anchorEl, setAnchorEl] = useState(null);
	const onFilterC = props.onFilterC

	const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);
  	};
  	const handleClose = () => {
    setAnchorEl(null);
  	};
  	const onChoose = (color) => {
  		onFilterC(color)
  	}
	return (
		<div>
			<Button 
					onClick={handleClick}
					aria-controls='filters' 
					aria-haspopup="true">
				Цвет товара
			</Button>
			<Menu keepMounted
				  anchorEl={anchorEl}
				  open={Boolean(anchorEl)}
				  onClose={handleClose}>
				  <MenuItem onClick={() => { onChoose('светлое') }}>
				  	Светлое	
          		  </MenuItem>
				  <MenuItem onClick={() => { onChoose('темное') }}>
				  	Тёмное
				  </MenuItem>
				  <MenuItem onClick={() => { onChoose('древесное') }}>
				  	Древесное
				  </MenuItem>
				  <MenuItem onClick={() => { onChoose('любые варианты') }}>
				  	Любое
				  </MenuItem>
			</Menu>
		</div>
	)
}
export default ColorFilter