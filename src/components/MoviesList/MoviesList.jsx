import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';

import styles from './MoviesList.module.css';

class MoviesList extends Component {
  // state = {
  //     movies: []
  // }

  componentDidMount() {
    console.log('MoviesList componentDidMount', this.props);
  }


  render() {
    const createUrl = this.props.match.url.includes('movies')
      ? `${this.props.match.url}`
      : `${this.props.match.url}movies/`;
    return (
      <ul className={styles.MoviesList}>
        {this.props.movies.map(({ id, title, poster_path, release_date }) => {
          return (
            <li key={id} className={styles.MoviesListItem}>
              <Link to={`${createUrl}${id}`}>
                <MovieCard
                  title={title}
                  poster_path={poster_path}
                  release_date={release_date}
                />
              </Link>
            </li>
          );
})}
      </ul>
    );
  }
}

export default withRouter(MoviesList);
