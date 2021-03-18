import React, { Component } from 'react'
import {getMovieReviews} from '../../utils/apiServices';
import styles from './MovieReviews.module.css';

class MovieReviews extends Component {
    state= {
        reviews: [],
    }

    async componentDidMount () {
        const movieId = this.parseUrl(this.props.match.url);
        if (movieId) {
        await getMovieReviews(movieId)
        .then(({results}) => this.setState({reviews: results}))
        .catch(error => console.log(error));
        }
    }

    parseUrl (url) {
        const pasredData = url.match("\\d+");
        if (pasredData) return pasredData[0];
        else return undefined;
    } 

    render() {
        return (

        <div>
           {!this.state.reviews.length && <p>No reviews for this movie</p>} 
           {this.state.reviews.length > 0 && <ul>
            {this.state.reviews.map(review => <li key={review.id}>
                <p>Author</p>
                <p>{review.author}</p>
                <p>{review.created_at}</p>
                <p>{review.updated_at}</p>
                <p>{review.content}</p>
            </li> )}
        </ul>}
        </div>
        )
    }
}

export default MovieReviews;