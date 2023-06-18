import { imageURL } from 'movie-api';
import PropTypes from 'prop-types';
import { StyledList, StyledCastItem } from './CastList.styled';

const defaultImg =
  'https://www.shutterstock.com/image-vector/no-photo-camera-outline-icon-600w-1081893020.jpg';

const CastList = ({ cast }) => {
  return (
    <StyledList>
      {cast.map(man => {
        const { id, profile_path, name, original_name, character } = man;
        return (
          <StyledCastItem key={id}>
            <img
              src={profile_path ? `${imageURL}/${profile_path}` : defaultImg}
              alt={name}
              width="100"
              height="150"
            />
            <h4>{original_name}</h4>
            <p>Character: {character}</p>
          </StyledCastItem>
        );
      })}
    </StyledList>
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
