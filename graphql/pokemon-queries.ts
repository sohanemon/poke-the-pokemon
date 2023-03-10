import { gql } from "@apollo/client";

export const GET_10_POKEMONS = gql`
  query {
    pokemons(limit: 12, offset: 0) {
      results {
        name
        dreamworld
        artwork
      }
    }
  }
`;

export const GET_POK_DETAILS = gql`
  query ($name: String!) {
    pokemon(name: $name) {
      id
      height
      weight
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
      name
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

export const GET_POK_TYPE = gql`
  query ($name: String!) {
    pokemon(name: $name) {
      id
      types {
        type {
          name
        }
      }
    }
  }
`;

export const GET_TYPES = gql`
  query {
    types {
      results {
        name
      }
    }
  }
`;
