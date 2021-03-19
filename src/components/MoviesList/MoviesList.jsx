import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';

import styles from './MoviesList.module.css';

class MoviesList extends Component {
  render() {
    return (
      <ul className={styles.MoviesList}>
        {this.props.movies.map(({ id, title, poster_path, release_date }) => {
          return (
            <li key={id} className={styles.MoviesListItem}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  search: this.props.search,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
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
