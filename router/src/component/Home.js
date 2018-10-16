import {Link} from 'react-router-dom';
import React from 'react';

export default class Home extends React.Component {
  render(){
    return (
      <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
          </ul>
      </div>
    );
  }
}
