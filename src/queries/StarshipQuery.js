import gql from "graphql-tag";

export const STARSHIP_QUERY = gql`
  query Starship($id: ID!) {
    starship(id: $id) {
      name
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
      pilotConnection {
        pilots {
          name
          id
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
