import React, { Component } from 'react'
import {getMovieCast} from '../utils/apiServices';

class MovieCast extends Component {
    state= {
        cast: []
    }

    async componentDidMount () {
        const movieId = this.parseUrl(this.props.match.url);
        await getMovieCast(movieId)
        .then(({cast}) => this.setState({cast}))
        .catch(error => console.log(error));
    }

    parseUrl (url) {
        console.log(url);    
        const pasredData = url.match("\\d+");
        if (pasredData) return pasredData[0];
    } 

    render() {
        return <ul>
            {this.state.cast.map(item => <li key={item.cast_id}>
                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt=""/>
                <p>{item.name}</p>
            </li> )}
        </ul>
    }
}

export default MovieCast;