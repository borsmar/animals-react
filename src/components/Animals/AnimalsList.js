import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalCard";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalsList extends Component {

  animalslisting = animals.map((item) => (
    <AnimalsCard key={item.name} name={item.name} />
  ));

  render() {
    return (
      <div className="container">
      <div className="animalsList">
        <Switch>
          <Route exact path={this.props.match.path}>
            
            <div className="cards">
            {this.animalslisting}
            </div>
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalSingle />
          </Route>
        </Switch>
        </div>
      </div>
    );
  }
}

export default AnimalsList;
