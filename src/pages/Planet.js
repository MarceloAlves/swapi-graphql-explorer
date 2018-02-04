import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import Jumbotron from "../partials/Jumbotron";
import { PLANET_QUERY } from "../queries/PlanetQuery";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.planetQuery && this.props.planetQuery.loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Jumbotron text={this.props.planetQuery.planet.name} />

        <div className="d-flex justify-content-center">
          <div className="col-sm-3">
            <h1 className="text-center">Stats</h1>
            <ul>
              <li>
                Rotation Period: {this.props.planetQuery.planet.rotationPeriod}
              </li>
              <li>
                Orbital Period: {this.props.planetQuery.planet.orbitalPeriod}
              </li>
              <li>Gravity: {this.props.planetQuery.planet.gravity}</li>
              <li>Population: {this.props.planetQuery.planet.population}</li>
              <li>Climates: {this.props.planetQuery.planet.climates}</li>
              <li>Terrains: {this.props.planetQuery.planet.terrains}</li>
              <li>
                Surface Water: {this.props.planetQuery.planet.surfaceWater}
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h1 className="text-center">Films</h1>
            <ul>
              {this.props.planetQuery.planet.filmConnection.films.map(film => (
                <li key={film.id}>
                  <Link to={`/film/${film.id}`}>{film.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3">
            <h1 className="text-center">Residents</h1>
            <div>
              {this.props.planetQuery.planet.residentConnection.residents.map(
                character => (
                  <Link
                    to={`/person/${character.id}`}
                    className="badge badge-secondary m-1"
                    key={character.id}
                  >
                    {character.name}
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

export default graphql(PLANET_QUERY, {
  name: "planetQuery",
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
})(Planet);
