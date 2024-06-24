import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '../services/themoviedb-api';
import STATUS from '../services/state-machine';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  let content = null;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery) {
        return;
      }

      try {
        setStatus(STATUS.PENDING);
        const resp = await API.fetchMoviesByName(searchQuery);
        setMovies(resp.results);
        setStatus(STATUS.RESOLVED);
        console.log(`Виконався UseEffect для ${searchQuery}`);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
        console.log('Failed to fetch Movies');
      }
    };

    fetchMovies();
  }, [searchQuery]);

  switch (status) {
    case STATUS.PENDING:
      content = <div>Loading...</div>;
      break;
    case STATUS.REJECTED:
      content = <div>{error.message}</div>;
      break;
    case STATUS.RESOLVED:
      content = <MoviesList movies={movies} />;
      break;
    default:
      content = null;
      break;
  }

  return (
    <>
      <SearchForm />
      {content}
    </>
  );

  // return (
  //   <>
  //     <SearchForm />
  //     {status === STATUS.PENDING && <div>Loading...</div>}
  //     {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
  //     {status === STATUS.REJECTED && <div>{error.message}</div>}
  //   </>
  // );

  // if (status === STATUS.IDLE) {
  //   return <SearchForm />;
  // }

  // if (status === STATUS.PENDING) {
  //   return (
  //     <>
  //       <SearchForm />
  //       <div>Loading...</div>
  //     </>
  //   );
  // }

  // if (status === STATUS.RESOLVED) {
  //   return (
  //     <>
  //       <SearchForm />
  //       <MoviesList movies={movies} />
  //     </>
  //   );
  // }

  // if (status === STATUS.REJECTED) {
  //   return (
  //     <>
  //       <SearchForm />
  //       <div>{error.message}</div>
  //     </>
  //   );
  // }
};

export default MoviesPage;
