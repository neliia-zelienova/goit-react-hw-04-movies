import React, { Component } from 'react';
import Searchbar from '../components/Seacrbar';
import { searchMovie } from '../utils/apiServices';
import MoviesList from '../components/MoviesList';
import queryString from 'query-string';

class Movies extends Component {
  state = {
    movies: [],
    emptyResponce: false,
  };

  async componentDidMount() {
    const querystr = queryString.parse(this.props.location.search);
    if (querystr.query) {
      await searchMovie(querystr.query).then(({ results }) =>
        this.setState({ movies: results, emptyResponce: results.length === 0 }),
      );
    }
  }

  componentWillUnmount = () => {};

  handleSubmit = query => {
    if (query) {
      searchMovie(query).then(({ results }) =>
        this.setState({ movies: results, emptyResponce: results.length === 0 }),
      );
    } else this.setState({ movies: [] });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {!this.state.emptyResponce ? (
          <MoviesList movies={this.state.movies} />
        ) : (
          <div>No such results...</div>
        )}
      </>
    );
  }
}
export default Movies;
