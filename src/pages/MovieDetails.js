import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'movie-api';
import MovieInfo from 'components/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function getMovieDetails() {
      try {
        setError('');
        setLoading(true);
        const fetchedMovie = await fetchMovieDetails(
          movieId,
          controller.signal
        );
        setMovie(fetchedMovie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();

    return () => controller.abort();
  }, [movieId]);

  return (
    <main>
      {loading && <p> Data is loading, please wait</p>}
      {error !== '' && <p>{error}</p>}
      {movie && !loading && <MovieInfo movie={movie} />}
    </main>
  );
};
export default MovieDetails;
