import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Movies from "./Movies";
import Actors from "./Actors";

export default class Routes extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
