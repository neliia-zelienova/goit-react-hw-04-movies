import "./App.css";
import React, { Component } from "react";
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './views/Home';
import Movies from './views/Movies';

class App extends Component {
 render () {

  return (<>
  <nav className="App-header-list">
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
  </nav>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/movies" component={Movies}/>
</Switch>
  </>)
 }
}

export default App;
