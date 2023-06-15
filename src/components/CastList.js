import { imageURL } from 'movie-api';
import PropTypes from 'prop-types';

const defaultImg =
  'https://www.baumandblume.com/wp-content/uploads/2017/02/no-image-icon-md.png';

const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(man => {
        const { id, profile_path, name, original_name, character } = man;
        return (
          <li key={id}>
            {profile_path !== null && (
              <img
                src={profile_path ? `${imageURL}/${profile_path}` : defaultImg}
                alt={name}
                width="100px"
              />
            )}
            <p>{original_name}</p>
            <p>Character: {character}</p>
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
