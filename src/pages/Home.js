import MoviesList from 'components/MoviesList';
import { fetchMovies } from 'movie-api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setError('');
        setLoading(true);
        const fetchedMovies = await fetchMovies(controller.signal);
        setMovies(fetchedMovies.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <b>Loading, please wait...</b>}
      {error !== '' && <b>Something went wrong! Try again...</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
