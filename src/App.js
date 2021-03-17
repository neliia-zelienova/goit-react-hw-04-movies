import "./App.css";
import React, { Component } from "react";
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './views/HomePage';
import Movies from './views/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage'

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
  <Route path="/:movieID" component={MovieDetailsPage}/>
  <Route path="/movies/:movieID" component={MovieDetailsPage}/>
</Switch>
  </>)
 }
}

export default App;
