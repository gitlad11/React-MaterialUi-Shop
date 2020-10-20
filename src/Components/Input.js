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
							borderBottom : "1px solid grey",
							borderLeft : '1px solid lightgrey'
							}}/>
			{icon == "email" ? (
				<AlternateEmailOutlinedIcon fontSize="small" style={{position : "absolute", "right" : "0px"}}/>
				) : (
					<VpnKeyOutlinedIcon fontSize="small" style={{ position : "absolute", "right" : "0px"}}/>
				)}

		</div>
		)
}
export default Input;