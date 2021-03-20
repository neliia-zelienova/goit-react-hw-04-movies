import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import Container from './components/Container';
import NotFoundPage from './views/NotFoundPage';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <Loader
              type="Circles"
              color="#eb8f2e"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
