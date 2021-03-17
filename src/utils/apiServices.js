import axios from 'axios';

const API_KEY = '15ccc9a8c676c1c9b5477fb06b4d7b82';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getPopular = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

const getMovieById = id => {
  return axios
    .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};


export { getPopular, getMovieById };
