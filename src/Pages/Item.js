import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import ItemContent from '../Components/ItemContent'
import ItemData from '../Components/ItemsData'

function Item(){
	const [item, setItem] = useState(ItemData)

	return (
		<div className="Item">
			<Header/>
			<ItemContent item={item}/>
			<Sidebar/>	
		</div>
	)
}
export default Item