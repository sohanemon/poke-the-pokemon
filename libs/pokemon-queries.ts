import { gql } from "@apollo/client";

export const GET_10_POKEMONS = gql`
  query {
    pokemons(limit: 10) {
      results {
        name
        dreamworld
      }
    }
  }
`;
