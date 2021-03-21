import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=a74414b944f8b513109b376ad415325e';

class Cast extends Component {
  state = {
    cast: [
      {
        name: null,
        character: null,
        profile_path: null,
        cast_id: null,
      },
    ],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `movie/${movieId}/credits${API_KEY}&language=en-US`,
    );

    this.setState({ ...response.data });
  }
  render() {
    // const { name, profile_path, character } = this.state;
    return (
      <>
        (<h1>Компонент актеров</h1>
        <ul>
          {this.state.cast.map(actor => (
            <li key={actor.cast_id}>
              <img src={actor.profile_path} alt={actor.name} />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
// {
//   this.state.cast.map(actor => (
//     <li key={actor.id}>
//       <p>{name}</p>
//       <p>{character}</p>
//     </li>
//   ));
// }
