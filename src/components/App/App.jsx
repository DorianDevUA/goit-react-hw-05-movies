// import { useEffect, useState } from 'react';
// import API from '../../services/themoviedb-api';

import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout';
import HomePage from '../../pages/HomePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<div>MoviesPage</div>} />
          <Route path="movies/:movieId" element={<div>MovieDetailsPage</div>}>
            <Route path="cast" element={<div>Cast component</div>} />
            <Route path="reviews" element={<div>Reviews component</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
