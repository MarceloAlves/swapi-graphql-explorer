import React, { Component } from "react";
import { graphql } from "react-apollo";
import { PEOPLE_QUERY } from "../queries/PeopleQuery";
import PersonCard from "../partials/PersonCard";
import Jumbotron from "../partials/Jumbotron";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.peopleQuery && this.props.peopleQuery.loading) {
      return <div>Loading...</div>;
    }

    if (this.props.peopleQuery && this.props.peopleQuery.error) {
      return <div>Error</div>;
    }

    const peopleToRender = this.props.peopleQuery.allPeople.people;

    return (
      <React.Fragment>
        <Jumbotron text="People" />
        <div className="container">
          <div className="d-flex flex-wrap">
            {peopleToRender.map(person => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default graphql(PEOPLE_QUERY, { name: "peopleQuery" })(People);
