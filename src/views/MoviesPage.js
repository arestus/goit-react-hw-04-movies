import React, { Component } from 'react';
import axios from 'axios';
// import movieApi from '../services/movieApi';
import Searchbar from '../components/Searchbar';
import { Link } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    results: [],
    searchQuery: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
      const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';
      const response = await axios.get(
        `search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.searchQuery}`,
      );
      const data = response.data.results;
      this.setState({
        results: data,
      });
    }
  }
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      results: [],
    });
  };
  //   fetchSearchList = () => {
  //     const { currentPage, searchQuery } = this.setState;
  //     const { options } = { searchQuery, currentPage };
  //     movieApi
  //       .fetchSearch(options)
  //       .then(results => {
  //         this.setState(prevState => ({
  //           results: [...prevState.results, ...results],
  //           currentPage: prevState.currentPage + 1,
  //         }));
  //       })
  //       .catch(error => this.setSate({ error }));
  //   };
  render() {
    const { results } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {results && (
          <ul>
            {results.map(result => (
              <li key={result.id}>
                <Link to={`${this.props.match.url}/${result.id}`}>
                  {result.name || result.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default MoviesPage;
