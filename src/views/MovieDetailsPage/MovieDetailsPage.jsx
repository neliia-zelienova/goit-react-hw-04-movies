import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import { getMovieById } from '../../utils/apiServices';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import noPosterImg from '../../images/poster_no.png';
import routes from '../../routes';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    original_title: null,
    vote_average: null,
    overview: null,
    release_date: '',
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
      }) => {
        this.setState({
          id,
          poster_path,
          vote_average,
          original_title,
          overview,
          genres,
          release_date,
        });
      },
    );
  }

  getGenresString = () => {
    const genreName = this.state.genres.map(genre => genre.name);
    return genreName.join(', ');
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push(routes.home);
  };

  render() {
    const genresString = this.getGenresString();
    const {
      poster_path,
      original_title,
      vote_average,
      overview,
      release_date,
    } = this.state;
    const { location, match, search } = this.props;
    const internalLinksGoBack = location.state ? location.state : 'underfind';
    const posterURL = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : noPosterImg;
    const releaseYear = release_date.slice(0, 4);
    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={styles.GoBack_button}
        >
          <span className={styles.GoBack_button_label}>Go back</span>
        </button>
        <div className={styles.MainInfo_Container}>
          <div className={styles.Poster_Container}>
            <img className={styles.Movie_Poster} src={posterURL} alt="" />
          </div>
          <div>
            <h2
              className={styles.Movie_title}
            >{`${original_title} (${releaseYear})`}</h2>
            <p>{`User score: ${vote_average * 10}%`}</p>
            <h3 className={styles.Category_title}>Overview</h3>
            <p>{overview}</p>
            <h3 className={styles.Category_title}>Genres</h3>
            <p>{genresString}</p>
          </div>
        </div>
        <div>
          <h2 className={styles.Category_title}>Additional information</h2>
          <div className={styles.AddInfo_container}>
            <NavLink
              exact
              className={styles.AddInfo_link}
              activeClassName={styles.AddInfo_active_link}
              to={{
                pathname: `${match.url}/cast`,
                search: search,
                state: internalLinksGoBack,
              }}
            >
              Cast
            </NavLink>
            <NavLink
              exact
              className={styles.AddInfo_link}
              activeClassName={styles.AddInfo_active_link}
              to={{
                pathname: `${match.url}/reviews`,
                search: search,
                state: internalLinksGoBack,
              }}
            >
              Reviews
            </NavLink>
          </div>

          <Switch>
            <Route exact path={`${match.url}/cast`} component={Cast} />
            <Route exact path={`${match.url}/reviews`} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}
export default MovieDetailsPage;
