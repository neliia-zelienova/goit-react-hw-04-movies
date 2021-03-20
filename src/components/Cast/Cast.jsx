import React, { Component } from 'react';
import { getMovieCast } from '../../utils/apiServices';
import styles from './Cast.module.css';
import noUserImg from '../../images/no-user-photo.jpg';

class MovieCast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const movieId = this.parseUrl(this.props.match.url);
    await getMovieCast(movieId)
      .then(({ cast }) => this.setState({ cast }))
      .catch(error => console.log(error));
  }

  parseUrl(url) {
    console.log(url);
    const pasredData = url.match('\\d+');
    if (pasredData) return pasredData[0];
  }

  createUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : noUserImg;
  };

  render() {
    return (
      <ul className={styles.Cast_list}>
        {this.state.cast.map(item => (
          <li key={item.cast_id} className={styles.Actor_container}>
            <img
              src={this.createUrl(item.profile_path)}
              alt=""
              className={styles.Actor_img}
            />

            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default MovieCast;
