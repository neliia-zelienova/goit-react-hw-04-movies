import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Searchbar from '../components/Seacrbar';
import { searchMovie } from '../utils/apiServices';
import MoviesList from '../components/MoviesList';
import queryString from 'query-string';

class Movies extends Component {
  state = {
    movies: [],
    query: '',
  };

  async componentDidMount() {
    const querystr = queryString.parse(this.props.location.search); 
    if (querystr.query) {
      await this.setState({query: querystr.query});
      searchMovie(this.state.query).then(({ results }) =>
        this.setState({ movies: results }),
      );
    }
    
  }

  handleSubmit = () => {
    searchMovie(this.state.query).then(({ results }) =>
      this.setState({ movies: results }),
    );
  };

  handleInput = e => {
    this.setState({
      query: e.currentTarget.value.replace(' ', '+'),
    });
  };

  render() {
    return (
      <>
        {/* <Searchbar onSubmit={this.handleSubmit}/> */}
        <form action="">
          <input type="text" onChange={this.handleInput} />
          <Link to={`${this.props.match.url}?query=${this.state.query}`}>
            <button type="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </Link>
        </form>
        {this.state.movies.length > 0 && (
          <MoviesList movies={this.state.movies} />
        )}
      </>
    );
  }
}
export default Movies;
