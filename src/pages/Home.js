import React, { Component } from "react";

import Jumbotron from "../partials/Jumbotron";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Jumbotron text="Star Wars" />;
  }
}

export default Home;
