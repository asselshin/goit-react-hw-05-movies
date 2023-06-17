import { fetchMovieCredits } from 'movie-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastList from '../components/CastList/CastList';

export default function Cast() {
  const { movieId } = useParams();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function getCast() {
      try {
        if (!movieId) return;
        setLoading(true);
        setError('');
        const fetchedCast = await fetchMovieCredits(movieId, controller.signal);
        setCast(fetchedCast.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCast();
    return () => controller.abort();
  }, [movieId]);

  return (
    <section>
      {loading && <p>Please wait...</p>}
      {error !== '' && <p>{error}</p>}
      {cast !== null && <CastList cast={cast} />}
    </section>
  );
}
