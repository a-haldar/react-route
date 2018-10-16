import React from 'react';
import {Link} from 'react-router-dom';

export default class Movies extends React.Component {

  render(){
    let collections = [{name:"Small Foot",genre:"animated"},
    {name:"The Nun",genre:"Horror"},
    {name:"Gravity", genre:"Science Fiction"}];
    return (
      <div>
        <ul>
          {collections.map(movie => <li>Movie: {movie.name} Genre:{movie.genre}</li>)}
        </ul>
        <Link to="/">Home</Link>
        <Link to="/actors">Actors</Link>
      </div>
    );
  }
}
