import gql from "graphql-tag";

export const PERSON_QUERY = gql`
  query Person($id: ID!) {
    person(id: $id) {
      name
      birthYear
      homeworld {
        id
        name
        population
      }
      filmConnection {
        films {
          id
          title
          releaseDate
        }
      }
      species {
        id
        name
        classification
        designation
        homeworld {
          name
          id
        }
        language
      }
    }
  }
`;
