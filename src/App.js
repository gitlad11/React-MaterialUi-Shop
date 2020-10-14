import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Favorite from './Pages/Favorite'
import Profile from './Pages/Profile'

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/favorite' component={Favorite}/>
        </Switch>
    </div>
  );
}

export default App;
