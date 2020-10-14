import React, { useState } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import history from "../history"

function UserCard(){
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onProfile = () => {
      history.push('/profile')
  }
  const onFavorite = () => {
    history.push('/favorite')
  }
  return (
    <div style={{ minHeight : "40px",         
                  display : "flex",
                  flexDirection : "row",
                  "width" : "320px",
                  "maxWidth" : "250px",

                  "margin" : "auto",
                  border : "1px solid lightgrey",
                  borderBottom : "1px solid grey",
                  borderTop : "1px solid grey", 
                  "borderRadius" : "4px"}}>
        <div style={{width : "70%", 
                    "height" : "inherit", 
                    justifyContent : "center", 
                    "TextAlign" :  "center",
                    padding : "4px",
                    paddingTop : "5%",
                    "overflowX" : "hidden",
                    "breakWord" : "all" }}>
          <b className="user-card-title" 
             style={{ color : "#1a307f", fontSize : "14px", "breakWord" : "all" }}>efimovi420@gmail.com</b>
        </div>
        <div style={{ justifyContent : "center", 
        "TextAlign" : "center", 
        "height" : "100%", 
        width : "30%"  }}>
        <IconButton onClick={handleClick} size="medium" edge="end">
          <MoreHorizIcon/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={onProfile}>Профиль</MenuItem>
          <MenuItem onClick={onFavorite}>Избранное</MenuItem>
          <MenuItem onClick={handleClose}>Выйти</MenuItem>
        </Menu>
        </div>  
    </div>
    )
}
export default UserCard
