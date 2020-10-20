import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function TypeFilter(props){
	const [anchorEl, setAnchorEl] = useState(null);
	const onFilter = props.onFilter

	const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);
  	};
  	const handleClose = () => {
    setAnchorEl(null);
  	};
  	const onChoose = (type) => {
  		onFilter(type)
  	}
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
				  <MenuItem onClick={ () => { onChoose('стул') }}>
				  	Стулья	
          		  </MenuItem>
				  <MenuItem onClick={ () => { onChoose('стол') }}>
				  	Столы
				  </MenuItem>
				  <MenuItem onClick={ () => { onChoose('шкаф') }}>
				  	Шкафы
				  </MenuItem>
			</Menu>
		</div>
	)
}
export default TypeFilter