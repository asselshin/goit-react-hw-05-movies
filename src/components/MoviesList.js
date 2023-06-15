import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        const { id, title } = movie;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
export default MoviesList;
