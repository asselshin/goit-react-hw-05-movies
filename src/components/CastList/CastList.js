import { imageURL } from 'movie-api';
import PropTypes from 'prop-types';
import { StyledList, StyledCastItem } from './CastList.styled';

const defaultImg =
  'https://www.baumandblume.com/wp-content/uploads/2017/02/no-image-icon-md.png';

const CastList = ({ cast }) => {
  return (
    <StyledList>
      {cast.map(man => {
        const { id, profile_path, name, original_name, character } = man;
        return (
          <StyledCastItem key={id}>
            {profile_path !== null && (
              <img
                src={
                  profile_path !== null
                    ? `${imageURL}/${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="100"
              />
            )}
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
