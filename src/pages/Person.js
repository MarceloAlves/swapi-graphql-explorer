import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import Jumbotron from "../partials/Jumbotron";

import { PERSON_QUERY } from "../queries/PersonQuery";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    if (this.props.personQuery && this.props.personQuery.loading) {
      return <div>Loading...</div>;
    }

    if (this.props.personQuery && this.props.personQuery.error) {
      return <div>Error</div>;
    }

    return (
      <React.Fragment>
        <Jumbotron text={this.props.personQuery.person.name} />

        <div className="d-flex justify-content-center">
          <div className="col-sm-3">
            <h1 className="text-center">Stats</h1>
            <ul>
              <li>Name: {this.props.personQuery.person.name}</li>
              <li>Birth Year: {this.props.personQuery.person.birthYear}</li>
              <li>
                Home World:{" "}
                <Link
                  to={`/planet/${this.props.personQuery.person.homeworld.id}`}
                >
                  {this.props.personQuery.person.homeworld.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h1 className="text-center">Films</h1>
            <ul>
              {this.props.personQuery.person.filmConnection.films.map(film => (
                <li key={film.id}>
                  <Link to={`/film/${film.id}`}>{film.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3">
            <h1 className="text-center">Species</h1>
            {this.props.personQuery.person.species
              ? this.props.personQuery.person.species.name
              : "N/A"}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(PERSON_QUERY, {
  name: "personQuery",
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
})(Person);
