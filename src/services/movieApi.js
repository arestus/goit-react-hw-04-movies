import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

const fetchMovies = () => {
  return axios.get(`trending/movie/day${API_KEY}`);
  // .then(response => response.data.results);
};

const fetchSearch = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `search/movie${API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${searchQuery}`,
    )
    .then(response => response.data.results);
};

const movieApi = {
  fetchMovies,
  fetchSearch,
  // fetchMovie,
};
export default movieApi;
