import React, { Component } from 'react';

import { getPopular } from '../utils/apiServices';
import MoviesList from '../components/MoviesList';

class Home extends Component {
  state = {
    movies: null,
  };
  async componentDidMount() {
    await getPopular().then(({ results }) => {
      this.setState({ movies: results });
    });
  }

  render() {
    return (
      <div>
        {this.state.movies && <MoviesList movies={this.state.movies} />}
      </div>
    );
  }
}

export default Home;
