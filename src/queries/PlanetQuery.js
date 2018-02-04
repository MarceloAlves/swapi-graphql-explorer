import gql from "graphql-tag";

export const PLANET_QUERY = gql`
  query Planet($id: ID!) {
    planet(id: $id) {
      id
      name
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      residentConnection {
        residents {
          id
          name
        }
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;
