import { imageURL } from 'movie-api';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(man => {
        return (
          <li key={man.id}>
            {man.profile_path !== null && (
              <img
                src={`${imageURL}/${man.profile_path}`}
                alt={man.name}
                width="100px"
              />
            )}
            <p>{man.original_name}</p>
            <p>Character: {man.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      original_name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};

export default CastList;