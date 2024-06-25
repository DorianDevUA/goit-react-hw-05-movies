import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout';
// import HomePage from '../../pages/HomePage';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import Cast from '../Cast';
// import { Reviews } from '../Reviews';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../Cast'));

// Приклад використання lazy() з іменованим експортом
const Reviews = lazy(() =>
  import('../Reviews').then(module => {
    return {
      ...module,
      default: module.Reviews,
    };
  }),
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
