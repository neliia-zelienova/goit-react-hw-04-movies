import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import AppBar from './components/AppBar';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <>
      <AppBar/>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieID" component={MovieDetailsPage} />
        </Switch>
      </Container>
      </>
    );
  }
}

export default App;
