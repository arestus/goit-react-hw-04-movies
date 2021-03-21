// import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../services/movieApi';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

class HomePage extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    const response = await movieApi.fetchMovies();

    // const response = await axios.get(`trending/all/day${API_KEY}`);
    // console.log(response);

    this.setState({ trending: response.data.results });
  }

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h1>Это HomePage</h1>
        <ul>
          {this.state.trending.map(trend => (
            <li key={trend.id}>
              <Link to={`${this.props.match.url}movies/${trend.id}`}>
                {trend.name || trend.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
