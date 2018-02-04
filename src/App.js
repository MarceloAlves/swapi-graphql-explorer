import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./partials/Header";

import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Planet from "./pages/Planet";
import Planets from "./pages/Planets";
import Film from "./pages/Film";
import Starships from "./pages/Starships";
import Starship from "./pages/Starship";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={People} />
          <Route path="/person/:id" component={Person} />
          <Route path="/planets" component={Planets} />
          <Route path="/planet/:id" component={Planet} />
          <Route path="/film/:id" component={Film} />
          <Route path="/starships" component={Starships} />
          <Route path="/starship/:id" component={Starship} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
