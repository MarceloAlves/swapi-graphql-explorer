import gql from "graphql-tag";

export const FILM_QUERY = gql`
  query Film($id: ID!) {
    film(id: $id) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;
