import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import API from '../services/themoviedb-api';
import MovieInfo from '../components/MovieInfo';
import STATUS from '../services/state-machine';
import AdditionalMovieInfo from '../components/AdditionalMovieInfo';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setStatus(STATUS.PENDING);

      try {
        const resp = await API.fetchMovieById(movieId);
        setMovie(resp);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <div>LOADING...</div>;
  }

  if (status === STATUS.REJECTED) {
    return (
      <>
        <div>Failed to fetch Movie</div>
        <div>{error.message}</div>
      </>
    );
  }

  if (status === STATUS.RESOLVED) {
    console.log('movie', movie);
    return (
      <>
        <Link to="">← Go back</Link>
        <MovieInfo movie={movie} />
        <AdditionalMovieInfo />
        <Outlet />
      </>
    );
  }
};

export default MovieDetailsPage;
