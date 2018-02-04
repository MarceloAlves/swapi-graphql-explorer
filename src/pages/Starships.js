import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { STARSHIPS_QUERY } from "../queries/StarshipsQuery";

import Jumbotron from "../partials/Jumbotron";

class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.starshipsQuery && this.props.starshipsQuery.loading) {
      return <div>Loading...</div>;
    }

    if (this.props.starshipsQuery && this.props.starshipsQuery.error) {
      return <div>Error</div>;
    }

    const starshipsToRender = this.props.starshipsQuery.allStarships.starships;

    return (
      <React.Fragment>
        <Jumbotron text="Starships" />
        <div className="container">
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap">
              {starshipsToRender.map(ship => (
                <div key={ship.id} className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <Link to={`/starship/${ship.id}`}>{ship.name}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(STARSHIPS_QUERY, { name: "starshipsQuery" })(Starships);
