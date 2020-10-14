import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function ColorFilter(){
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);
  	};
  	const handleClose = () => {
    setAnchorEl(null);
  	};
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
				  <MenuItem>
				  	Светлое	
          		  </MenuItem>
				  <MenuItem>
				  	Тёмное
				  </MenuItem>
				  <MenuItem>
				  	Древесное
				  </MenuItem>
				  <MenuItem>
				  	Другое
				  </MenuItem>
			</Menu>
		</div>
	)
}
export default ColorFilter