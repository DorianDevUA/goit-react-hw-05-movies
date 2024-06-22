import { useEffect, useState } from 'react';
import API from '../services/themoviedb-api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

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
    return (
      <div>
        {movies.map(movie => (
          <div key={movie.title}>{movie.title}</div>
        ))}
      </div>
    );
  }

  if (STATUS === STATUS.REJECTED) {
    return (
      <>
        <div>Failed to fetch Trending Movies</div>
        <div>{error}</div>
      </>
    );
  }

  // return (
  //   <>
  //     {isLoading && <div>Loading...</div>}
  //     {error && <div>Failed to fetch Trending Movies</div>}
  //   </>
  // );
};

export default HomePage;
