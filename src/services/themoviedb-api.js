import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '839f17f2619f8bb5cfcb10d7c8612ac4';

axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'uk',
  });

  const response = await axios(`trending/movie/week?${searchParams}`);
  return response.data;
};

const fetchMoviesByName = async (query, page = 1) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'uk',
    query,
    page,
  });

  const response = await axios(`search/movie?${searchParams}`);
  return response.data;
};

const fetchMovieById = async movie_id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'uk',
  });

  const response = await axios(`movie/${movie_id}?${searchParams}`);
  return response.data;
};

const fetchCastById = async movie_id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'uk',
  });

  const response = await axios(`movie/${movie_id}/credits?${searchParams}`);
  return response.data;
};

const fetchReviewsById = async (movie_id, page = 1) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    page,
  });

  const response = await axios(`movie/${movie_id}/reviews?${searchParams}`);
  return response.data;
};

const API = {
  fetchTrendingMovies,
  fetchMoviesByName,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
};

export default API;
