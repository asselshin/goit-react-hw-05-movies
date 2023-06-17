import axios from 'axios';

const API_KEY = 'be88e8b6abee602da2d38b01a63dd167';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  language: 'en-US',
  api_key: API_KEY,
};

export const imageURL = 'https://image.tmdb.org/t/p/w500';

export const fetchMovies = async controllerSignal => {
  const responce = await axios.get(`/trending/movie/day`, {
    signal: controllerSignal,
  });
  return responce.data;
};

export const fetchSearchMovie = async (movieName, controllerSignal) => {
  const responce = await axios.get(`/search/movie`, {
    params: {
      query: movieName,
    },
    signal: controllerSignal,
  });
  return responce.data;
};

export const fetchMovieDetails = async (movieId, controllerSignal) => {
  const responce = await axios.get(`/movie/${movieId}`, {
    signal: controllerSignal,
  });

  return responce.data;
};

export const fetchMovieReviews = async (movieId, controllerSignal) => {
  const responce = await axios.get(`/movie/${movieId}/reviews`, {
    signal: controllerSignal,
  });
  return responce.data;
};

export const fetchMovieCredits = async (movieId, controllerSignal) => {
  const responce = await axios.get(`/movie/${movieId}/credits`, {
    signal: controllerSignal,
  });
  return responce.data;
};
