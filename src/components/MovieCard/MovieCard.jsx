import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, poster_path, release_date }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = release_date.slice(0, 4);
  return (
    <>
      <div className={styles.MoviePosterContainer}>
        <img src={posterURL} alt="" className={styles.MoviePoster}/>
      </div>
      <div className={styles.MovieInfoContainer}>
        <p className={styles.MovieTitle}>{title}</p>
        <p className={styles.MovieDate}>{releaseYear}</p>
      </div>
    </>
  );
};

export default MovieCard;
