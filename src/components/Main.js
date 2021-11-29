import React, {Component} from "react";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnimalsList from "./Animals/AnimalsList";

class Main extends Component{
    
    render(){
        return(
            <main>
            <Switch>
               <Route path="/" exact component={Home} /> 
               <Route path="/animals" component={AnimalsList} /> 
              <Route path="/about" component={About} />
            </Switch>
          </main>
        )
    }

}

export default Main;