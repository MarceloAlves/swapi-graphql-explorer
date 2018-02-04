import gql from "graphql-tag";

export const PLANETS_QUERY = gql`
  {
    allPlanets {
      planets {
        id
        name
      }
    }
  }
`;
