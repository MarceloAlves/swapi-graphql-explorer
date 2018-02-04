import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { STARSHIP_QUERY } from "../queries/StarshipQuery";

import Jumbotron from "../partials/Jumbotron";

class Starship extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.starshipQuery && this.props.starshipQuery.loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Jumbotron text={this.props.starshipQuery.starship.name} />

        <div className="d-flex justify-content-center">
          <div className="col-sm-3">
            <h1 className="text-center">Stats</h1>
            <ul>
              <li>Model: {this.props.starshipQuery.starship.model}</li>
              <li>
                Starship Class:{" "}
                {this.props.starshipQuery.starship.starshipClass}
              </li>
              <li>
                Manufacturers: {this.props.starshipQuery.starship.manufacturers}
              </li>
              <li>Cost: {this.props.starshipQuery.starship.costInCredits}</li>
              <li>Length: {this.props.starshipQuery.starship.length}</li>
              <li>Crew: {this.props.starshipQuery.starship.crew}</li>
              <li>
                Passengers: {this.props.starshipQuery.starship.passengers}
              </li>
              <li>
                Max Atmosphering Speed:{" "}
                {this.props.starshipQuery.starship.maxAtmospheringSpeed}
              </li>
              <li>
                Hyperdrive Rating:{" "}
                {this.props.starshipQuery.starship.hyperdriveRating}
              </li>
              <li>MGLT: {this.props.starshipQuery.starship.MGLT}</li>
              <li>
                Cargo Capacity:{" "}
                {this.props.starshipQuery.starship.cargoCapacity}
              </li>
              <li>
                Consumables: {this.props.starshipQuery.starship.consumables}
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h1 className="text-center">Films</h1>
            <ul>
              {this.props.starshipQuery.starship.filmConnection.films.map(
                film => (
                  <li key={film.id}>
                    <Link to={`/film/${film.id}`}>{film.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-sm-3">
            <h1 className="text-center">Pilots</h1>
            <div>
              {this.props.starshipQuery.starship.pilotConnection.pilots.map(
                pilot => (
                  <Link
                    to={`/person/${pilot.id}`}
                    className="badge badge-secondary m-1"
                    key={pilot.id}
                  >
                    {pilot.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(STARSHIP_QUERY, {
  name: "starshipQuery",
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
})(Starship);
