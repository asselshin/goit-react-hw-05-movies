import MoviesList from 'components/MoviesList';
import { fetchSearchMovie } from 'movie-api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedQuery = searchParams.get('query');

  useEffect(() => {
    const controller = new AbortController();
    if (searchedQuery === '') return;

    async function searchMovie() {
      const searchedMovies = await fetchSearchMovie(
        searchedQuery,
        controller.signal
      );
      setSearchedMovies(searchedMovies.results);
    }
    searchMovie();

    return () => controller.abort();
  }, [searchedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movieInput.value.trim() });
    form.reset();
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <input type="text" name="movieInput" />
        <button type="submit">Search</button>
      </form>
      {searchedMovies !== null && <MoviesList movies={searchedMovies} />}
    </>
  );
};

export default Movies;
