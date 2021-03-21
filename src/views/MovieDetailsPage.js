import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import movieApi from '../services/movieApi';
import axios from 'axios';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    id: null,
    original_title: null,
    overview: null,
    poster_path: null,
    release_date: null,
    title: null,
  };
  async componentDidMount() {
    // const response = await movieApi.fetchMovie();

    // console.log(response);

    // this.setState({ movie: response.data.results });

    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `movie/${movieId}${API_KEY}&language=en-US`,
    );

    this.setState({ ...response.data });
  }

  render() {
    console.log(this.props.match.path);
    const {
      backdrop_path,
      original_title,
      title,
      overview,
      release_date,
    } = this.state;

    return (
      <>
        <h1>Это страница фильма {this.props.match.params.movieId}</h1>
        <img src={backdrop_path} alt={original_title}></img>
        <h2>{original_title || title}</h2>
        <p>{overview}</p>
        <p>{release_date}</p>
        <NavLink to={`${this.props.match.url}/cast`}>
          <p>Cast</p>
        </NavLink>

        <Route
          path={`${this.props.match.path}/cast`}
          render={() => <h1>Страница актеров</h1>}
        />
        <Route path={`${this.props.match.path}`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
