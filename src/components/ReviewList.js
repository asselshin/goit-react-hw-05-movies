import PropTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default ReviewList;
