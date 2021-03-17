import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import {getMovieById} from '../../utils/apiServices'


class MovieDetailsPage extends Component {
    state = {
        id: null,
        posterUrl: null, 
        original_title: null, 
        vote_average: null, 
        overview: null,
        genres: []
    }

    async componentDidMount () {
        
    }
    
    render () {
        const {} = this.state.movie;
        return <div>
        <div>
            <img src={posterUrl} alt=""/>
        </div>
        <div>

            <h2>{original_title}</h2>
            <p>{vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{this.state.genres}</p>

        </div>
        <div>
            <h2>Additional information</h2>
            <NavLink>Cast</NavLink>
            <NavLink>Reviews</NavLink>
            <Switch>
                <Route  />
                <Route  />
            </Switch>
        </div>
    </div>}
} 
export default MovieDetailsPage;