import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';


class MovieDetailsPage extends Component {
    state = {
        movie: null,
        genres: []
    }
    
    render () {
        const {posterUrl, original_title, vote_average, overview} = this.state.movie;
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