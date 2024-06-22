import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '43aaf7c3ec65b1e75f3b7c8082fa8485';

axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'uk',
  });

  const response = await axios(`trending/movie/week?${searchParams}`);
  return response.data;
};

const API = {
  fetchTrendingMovies,
};

export default API;
