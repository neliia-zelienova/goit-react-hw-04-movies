import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './views/Home';
import Movies from './views/Movies';

class App extends Component {
 render () {

  return (<>
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/movies">Movies</NavLink></li>
  </ul>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/movies" component={Movies}/>
</Switch>
  </>)
 }
}

export default App;
