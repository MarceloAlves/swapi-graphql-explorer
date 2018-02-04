import gql from "graphql-tag";

export const PEOPLE_QUERY = gql`
  {
    allPeople {
      people {
        name
        id
      }
    }
  }
`;
