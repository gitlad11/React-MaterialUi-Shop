import React from 'react'
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

function Input(props){
	const icon = props.icon
	return (
		<div style={{ marginBottom : "5px",
					  height : "22px",
					  width : "90%",
					  minWidth : "400px",
					  position : "relative" }}>
			<input  type={props.type || "text"}
					onChange={props.onChange}
					label={props.label || ""}
					placeholder={props.placeholder}
					className={props.className || "input"}
					style={{ position : "absolute", 
							height : "inherit", 
							width : "inherit",
							minWidth : "400px", 
							border : "None",
							borderBottom : "2px solid grey",
							borderLeft : '2px solid lightgrey'
							}}/>
			{icon == "email" ? (
				<AlternateEmailOutlinedIcon style={{position : "absolute", "right" : "0px"}}/>
				) : (
				<VpnKeyOutlinedIcon style={{ position : "absolute", "right" : "0px"}}/>
				)}
		</div>
		)
}
export default Input;