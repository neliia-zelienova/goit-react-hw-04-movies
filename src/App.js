import './App.css';
import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import AppBar from './components/AppBar'

class App extends Component {
  render() {
    return (
      <>
        <AppBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieID" component={MovieDetailsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
