import React from 'react';
import {Link} from 'react-router-dom';
export default class NotFound extends React.Component {
  render(){
    return(
      <div>
        Page Not Not
        <Link to="/">Home </Link>
      </div>
    );
  }
}