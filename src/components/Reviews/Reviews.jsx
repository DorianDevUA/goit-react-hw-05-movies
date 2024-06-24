import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import STATUS from '../../services/state-machine';
import API from '../../services/themoviedb-api';
import ReviewList from '../ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const { movieId } = useParams();

  const isReviewsExist = reviews.length > 0;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setStatus(STATUS.PENDING);
        const resp = await API.fetchReviewsById(movieId);
        setReviews(resp.results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
        console.log('Failed to fetch Reviews');
      }
    };

    fetchReviews();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.REJECTED) {
    return <div>{error.message}</div>;
  }

  if (status === STATUS.RESOLVED) {
    return (
      <>
        {isReviewsExist ? (
          <ReviewList reviews={reviews} />
        ) : (
          <div>We don&apos;t have any reviews for this movie</div>
        )}
      </>
    );
  }
};

export default Reviews;
