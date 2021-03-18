import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import { getMovieById } from '../../utils/apiServices';
import MovieCast from '../../components/MovieCast';
import MovieReviews from '../../components/MovieReviews';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    original_title: null,
    vote_average: null,
    overview: null,
    release_date: null,
    genres: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieID;
    await getMovieById(movieId).then(
      ({
        id,
        poster_path,
        vote_average,
        original_title,
        overview,
        genres,
        release_date,
      }) =>
        this.setState({
          id,
          poster_path,
          vote_average,
          original_title,
          overview,
          genres,
          release_date,
        }),
    );
  }

  getGenreNamebyString = () => {
    const genreName = this.state.genres.map(genre => genre.name);
    return genreName.join(', ');
  };

  render() {
    const genresString = this.getGenreNamebyString();
    const { poster_path, original_title, vote_average, overview } = this.state;
    const posterURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <div>
        <div>
          {posterURL && <img src={posterURL} alt="" />}
        </div>
        <div>
          <h2>{original_title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </div>
        <div>
          <h2>Additional information</h2>
          <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          <Switch>
              <Route exact path={`${this.props.match.url}/cast`} component={MovieCast}/>
              <Route exact path={`${this.props.match.url}/reviews`} component={MovieReviews}/>
          </Switch>
        </div>
      </div>
    );
  }
}
export default MovieDetailsPage;
