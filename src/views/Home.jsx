import React, {Component} from 'react'

import { getPopular } from "../utils/apiServices";
import MoviesList from '../components/MoviesList';


class Home extends Component {
    state = {
        movies: null,
      };
     async componentDidMount() {
      await getPopular()
          .then(({ results }) => {
            console.log(results);
            this.setState({ movies: results })
          })
          .catch((error) => console.log(error))
          .finally();
      }
    
      render() {
        return (
          <>
            <h1>Header</h1>
            <ul>
              {this.state.movies &&
              <MoviesList movies={this.state.movies} />}
            </ul>
          </>
        );
      }
}

export default Home;