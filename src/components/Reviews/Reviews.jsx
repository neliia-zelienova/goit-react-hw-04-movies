import React, { Component } from 'react';
import { getMovieReviews } from '../../utils/apiServices';
import styles from './Reviews.module.css';
import Linkify from 'react-linkify';

class MovieReviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.parseUrl(this.props.match.url);
    if (movieId) {
      await getMovieReviews(movieId).then(({ results }) =>
        this.setState({ reviews: results }),
      );
    }
  }

  parseUrl(url) {
    const pasredData = url.match('\\d+');
    if (pasredData) return pasredData[0];
    else return undefined;
  }

  parseCreatedDate = date => {
    const regDate = /^([0-9]{4}-[0-9]{2}-[0-9]{2})/;
    const regTime = /([0-9]{2}:[0-9]{2})/;
    return `${regDate.exec(date)[0]} ${regTime.exec(date)[0]}`;
  };

  render() {
    return (
      <div>
        {!this.state.reviews.length && (
          <p className={styles.NoReviews_message}>
            No reviews for this movie yet...
          </p>
        )}
        {this.state.reviews.length > 0 && (
          <ul>
            {this.state.reviews.map(review => {
              return (
                <li key={review.id} className={styles.Review_Container}>
                  <p className={styles.Autor_Name}>Author: {review.author}</p>
                  <p className={styles.Creation_Date}>
                    {this.parseCreatedDate(review.created_at)}
                  </p>
                  <div className={styles.Overview_Text}>
                    <Linkify className="test">{review.content}</Linkify>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default MovieReviews;
