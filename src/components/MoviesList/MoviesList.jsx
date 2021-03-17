import React, { Component } from 'react';
import MovieCard from '../MovieCard';

import styles from './MoviesList.module.css';

class MoviesList extends Component {
  // state = {
  //     movies: []
  // }

  render() {
    return (
      <ul className={styles.MoviesList}>
        {this.props.movies.map(({ id, title, poster_path, release_date }) => (
          <li key={id} className={styles.MoviesListItem}>
            <MovieCard
              title={title}
              poster_path={poster_path}
              release_date={release_date}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default MoviesList;
