import PropTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
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
