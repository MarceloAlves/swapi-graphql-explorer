import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { convertToRoman } from "../utils";
import Jumbotron from "../partials/Jumbotron";
import { FILM_QUERY } from "../queries/FilmQuery";
import "./Film.css";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.filmQuery && this.props.filmQuery.loading) {
      return <div>Loading...</div>;
    }

    if (this.props.filmQuery && this.props.filmQuery.error) {
      return <div>Error: {JSON.stringify(this.props.filmQuery.error)}</div>;
    }

    return (
      <React.Fragment>
        <Jumbotron text={this.props.filmQuery.film.title} />
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <ul>
                <li>Release Date: {this.props.filmQuery.film.releaseDate}</li>
                <li>Director: {this.props.filmQuery.film.director}</li>
                <li>Producers: {this.props.filmQuery.film.producers}</li>
                <li>
                  Characters:
                  {this.props.filmQuery.film.characterConnection.characters.map(
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
                </li>
              </ul>
            </div>
            <div className="col-sm-7">
              <div className="crawl text-center p-3">
                <h5 className="episode-number">
                  Episode {convertToRoman(this.props.filmQuery.film.episodeID)}
                </h5>
                <h1 className="episode-title">
                  {this.props.filmQuery.film.title}
                </h1>
                <p>{this.props.filmQuery.film.openingCrawl}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(FILM_QUERY, {
  name: "filmQuery",
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
})(Film);
