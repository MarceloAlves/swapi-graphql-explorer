import gql from "graphql-tag";

export const STARSHIPS_QUERY = gql`
  {
    allStarships {
      starships {
        id
        name
      }
    }
  }
`;
