import axios from 'axios';

const API_KEY = '15ccc9a8c676c1c9b5477fb06b4d7b82';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const requestToApi = async url => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log('Error', error);
    return [];
  }
};

const getPopular = () => {
  return requestToApi(`/trending/movie/day?api_key=${API_KEY}`);
};

const getMovieById = id => {
  return requestToApi(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

const getMovieCast = id => {
  return requestToApi(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
};

const getMovieReviews = id => {
  return requestToApi(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
};

const searchMovie = query => {
  return requestToApi(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
};

export { getPopular, getMovieById, getMovieCast, getMovieReviews, searchMovie };
