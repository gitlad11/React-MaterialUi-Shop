import React from 'react'
import  EmptyIcon  from './Images/icons8-empty.png'

function Empty(props){
	return(
		<div style={{ paddingTop : '35px',  width : '100%', textAlign  : 'center', 'justifyContent' : 'center' }} >
			<img style={{ margin : 'auto', height : '62px', width : '62px' }} src={EmptyIcon} />
			<p style={{ fontSize : '16px' }}>{props.text}</p>
		</div>
	)
}
export default Empty

