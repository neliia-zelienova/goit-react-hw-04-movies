import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { searchMovie } from '../../utils/apiServices';
import MoviesList from '../../components/MoviesList';
import queryString from 'query-string';
import styles from './MoviesPage.module.css';

class Movies extends Component {
  state = {
    movies: [],
    emptyResponce: false,
    query: '',
  };

  async componentDidMount() {
    const querystr = queryString.parse(this.props.location.search);
    if (querystr.query) {
      await searchMovie(querystr.query).then(({ results }) =>
        this.setState({ movies: results, emptyResponce: results.length === 0 }),
      );
    }
  }

  handleSubmit = () => {
    if (this.state.query) {
      console.log('this.state.query', this.state.query);
      searchMovie(this.state.query).then(({ results }) =>
        this.setState({ movies: results, emptyResponce: results.length === 0 }),
      );
    } else this.setState({ movies: [] });
  };

  handleInput = e => {
    this.setState({
      query: e.currentTarget.value.replaceAll(' ', '+'),
    });
  };

  render() {
    return (
      <>
        <form className={styles.SearchForm}>
          <Link to={`${this.props.match.url}?query=${this.state.query}`}>
            <button
              type="submit"
              className={styles.SearchForm__button}
              onClick={this.handleSubmit}
            >
              <span className={styles.SearchForm__button__label}>Search</span>
            </button>
          </Link>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie..."
            onChange={this.handleInput}
          />
        </form>

        {!this.state.emptyResponce ? (
          <MoviesList movies={this.state.movies} />
        ) : (
          <div className={styles.No_search_results}>No such results...</div>
        )}
      </>
    );
  }
}
export default Movies;
