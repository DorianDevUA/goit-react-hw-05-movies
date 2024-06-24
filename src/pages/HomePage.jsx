import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../services/themoviedb-api';
import STATUS from '../services/state-machine';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      setStatus(STATUS.PENDING);
      console.log('Зміна статусу на STATUS.PENDING');

      try {
        const resp = await API.fetchTrendingMovies();
        setMovies(resp.results);
        setStatus(STATUS.RESOLVED);
        console.log('Зміна статусу на STATUS.RESOLVED');
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
        console.log('Зміна статусу на STATUS.REJECTED');
        console.log('Failed to fetch Trending Movies');
      }
    };

    fetchMovies();
  }, []);

  if (status === STATUS.IDLE) {
    console.log('Відпрацював STATUS.IDLE');
    return <div>STATUS.IDLE - Active!</div>;
  }

  if (status === STATUS.PENDING) {
    return <div>Loading...</div>;
  }

  if (status === STATUS.RESOLVED) {
    console.log(movies);
    return <MoviesList movies={movies} location={location} />;
  }

  if (STATUS === STATUS.REJECTED) {
    return (
      <>
        <div>Failed to fetch Trending Movies</div>
        <div>{error.message}</div>
      </>
    );
  }
};

export default HomePage;
