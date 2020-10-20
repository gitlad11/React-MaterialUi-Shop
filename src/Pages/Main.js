import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import MainContent from '../Components/MainContent'
import '../Components/Main.css'
import Axios from 'axios'

function Main() {
	const [items, setItems] = useState([])
	useEffect(() => {
		const items = Axios.get('/items').then((response) => {
			if(response.data.items){
				setItems(response.data.items)
			}
		})
	}, [])
	const onSearch = (query) => {
		Axios.post('/query', { 'query' : query }).then((response) => {
			setItems(response.data.filter)
		})
	}
	const onFilter = (type) => {
		Axios.post('/search', { 'query' : type }).then((response) => {
			setItems(response.data.filter)
		})
	}
	const onFilterC = (color) => {
		Axios.post('/searchColor', { 'query' : color }).then((response) => {
			setItems(response.data.filter)
		})
	} 	
  return (
    <div className="Main">
        <Header/>
        <MainContent onSearch={onSearch}
        			 onFilterC={onFilterC} 
        			 onFilter={onFilter} 
        			 items={items}/>
    </div>
  );
}
export default Main;