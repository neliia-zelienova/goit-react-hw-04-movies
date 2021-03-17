import './App.css';
import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import { useImage } from 'react-image';

class App extends Component {
  render() {
    return (
      <>
        <nav className="App-header-list">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
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
