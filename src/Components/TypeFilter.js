import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function TypeFilter(){
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
				Тип товара
			</Button>
			<Menu keepMounted
				  anchorEl={anchorEl}
				  open={Boolean(anchorEl)}
				  onClose={handleClose}>
				  <MenuItem>
				  	Стулья	
          		  </MenuItem>
				  <MenuItem>
				  	Столы
				  </MenuItem>
				  <MenuItem>
				  	Шкафы
				  </MenuItem>
			</Menu>
		</div>
	)
}
export default TypeFilter