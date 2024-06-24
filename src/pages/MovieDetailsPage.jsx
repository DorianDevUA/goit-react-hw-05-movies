import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import API from '../services/themoviedb-api';
import MovieInfo from '../components/MovieInfo';
import STATUS from '../services/state-machine';
import AdditionalMovieInfo from '../components/AdditionalMovieInfo';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setStatus(STATUS.PENDING);
        const resp = await API.fetchMovieById(movieId);
        setMovie(resp);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
        console.log('Failed to fetch Movie');
      }
    };

    fetchMovie();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <div>LOADING...</div>;
  }

  if (status === STATUS.REJECTED) {
    return <div>{error.message}</div>;
  }

  if (status === STATUS.RESOLVED) {
    return (
      <>
        <Link to={backLinkLocationRef.current}>← Go back</Link>
        <MovieInfo movie={movie} />
        <AdditionalMovieInfo />
        <Suspense fallback={<div>LOADING... SUSPENSE SUBPAGE...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

export default MovieDetailsPage;
