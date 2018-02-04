import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { PLANETS_QUERY } from "../queries/PlanetsQuery";
import Jumbotron from "../partials/Jumbotron";

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.planetsQuery && this.props.planetsQuery.loading) {
      return <div>Loading...</div>;
    }

    if (this.props.planetsQuery && this.props.planetsQuery.error) {
      return <div>Error</div>;
    }

    const planetsToRender = this.props.planetsQuery.allPlanets.planets;

    return (
      <React.Fragment>
        <Jumbotron text="Planets" />
        <div className="container">
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap">
              {planetsToRender.map(planet => (
                <div key={planet.id} className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <Link to={`/planet/${planet.id}`}>{planet.name}</Link>
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

export default graphql(PLANETS_QUERY, { name: "planetsQuery" })(Planets);
