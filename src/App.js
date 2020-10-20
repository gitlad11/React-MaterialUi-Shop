import React, { useState, useEffect } from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Favorite from './Pages/Favorite'
import Profile from './Pages/Profile'
import Cart from './Pages/Cart'
import Item from './Pages/Item'
import Context from './Context'
import Authentication from './Authentication'

const email = "efimovi@gmail.com"

function App(){
    Authentication()
    const [user, setUser] = useState()

    useEffect(() => {
        const Auth = localStorage.getItem("auth-user")
        setUser(Auth)
    },[])

  return (
    <div className="App">
        <Switch>

        <Route exact path='/' component={Main}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/favorite' component={Favorite}/>
        <Route exact path='/items/:id' render={(props) => <Item id={props.match.params.id} />}/>

        </Switch>
    </div>
  );
}

export default App;
