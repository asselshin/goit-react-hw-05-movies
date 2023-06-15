import { fetchMovieReviews } from 'movie-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';

export default function Reviews() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getReview() {
      try {
        if (!movieId) return;
        setLoading(false);
        const fetchedReviews = await fetchMovieReviews(
          movieId,
          controller.signal
        );
        setReviews(fetchedReviews.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getReview();

    return () => controller.abort();
  }, [movieId]);

  return (
    <section>
      {loading && <p>Please wait...</p>}
      {error !== '' && <p>Something went wrong</p>}
      {reviews.length > 0 && <ReviewList reviews={reviews} />}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </section>
  );
}
