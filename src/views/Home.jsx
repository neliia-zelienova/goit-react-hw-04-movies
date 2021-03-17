import React, {Component} from 'react'

import { getPopular } from "../utils/apiServices";


class Home extends Component {
    state = {
        movies: null,
      };
      componentDidMount() {
        getPopular()
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
                this.state.movies.map((movie) => <li>{movie.original_title}</li>)}
            </ul>
          </>
        );
      }
}

export default Home;