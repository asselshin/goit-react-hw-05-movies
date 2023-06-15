import axios from 'axios';

const API_KEY = 'be88e8b6abee602da2d38b01a63dd167';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const imageURL = 'https://image.tmdb.org/t/p/original';

export const fetchMovies = async controllerSignal => {
  const responce = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
    params: { language: 'en-US' },
    signal: controllerSignal,
  });
  return responce.data;
};

export const fetchSearchMovie = async (movieName, { controllerSignal }) => {
  const responce = await axios.get(`/search/movie`, {
    params: {
      query: movieName,
      api_key: API_KEY,
      signal: controllerSignal,
    },
  });
  return responce.data;
};

export const fetchMovieDetails = async (movieId, { controllerSignal }) => {
  const responce = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, {
    params: { language: 'en-US' },
    signal: controllerSignal,
  });
  return responce.data;
};

export const fetchMovieReviews = async (movieId, { controllerSignal }) => {
  const responce = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    {
      params: { signal: controllerSignal },
    }
  );
  return responce.data;
};

export const fetchMovieCredits = async (movieId, { controllerSignal }) => {
  const responce = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    {
      params: { signal: controllerSignal },
    }
  );
  return responce.data;
};
