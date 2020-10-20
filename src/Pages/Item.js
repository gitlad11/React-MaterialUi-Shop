import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import ItemContent from '../Components/ItemContent'
import ItemData from '../Components/ItemsData'
import Axios from 'axios'

function Item(props){
	const [item, setItem] = useState({})
	const ID = props.id

	useEffect(() =>  {
		Axios.post('/item', { 'id' : ID }, { headers:{
                      "Content-Type" : "application/json"
                    }
                  }).then((response) => {
                  	console.log(response.data.item)
                    setItem(response.data.item)
                  }).catch((error) => { console.log(error) })
	},[])
	return (
		<div className="Item">
			<Header/>
			<ItemContent item ={ItemData} ID={ID}/>
			<Sidebar/>	
		</div>
	)
}
export default Item