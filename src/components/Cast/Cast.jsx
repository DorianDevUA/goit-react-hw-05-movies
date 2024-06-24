import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/themoviedb-api';
import CastList from '../CastList';
import STATUS from '../../services/state-machine';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setStatus(STATUS.PENDING);
        const resp = await API.fetchCastById(movieId);
        setCast(resp.cast);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
        console.log('Failed to fetch Cast');
      }
    };

    fetchCast();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.REJECTED) {
    return <div>{error.message}</div>;
  }

  if (status === STATUS.RESOLVED) {
    return <CastList cast={cast} />;
  }
};

export default Cast;
