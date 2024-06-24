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

  useEffect(() => {
    const fetchReviews = async () => {
      setStatus(STATUS.PENDING);

      try {
        const resp = await API.fetchReviewsById(movieId);
        setReviews(resp.results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        console.log(error);
        setStatus(STATUS.REJECTED);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <div>Loading Subpage...</div>;
  }

  if (status === STATUS.REJECTED) {
    return (
      <>
        <div>Failed to fetch Reviews</div>
        <div>{error.message}</div>
      </>
    );
  }

  if (status === STATUS.RESOLVED) {
    console.log('reviews', reviews);
    return (
      <>
        {reviews.length > 0 ? (
          <ReviewList reviews={reviews} />
        ) : (
          <div>We don&apos;t have any reviews for this movie</div>
        )}
      </>
    );
  }
};

export default Reviews;
