import { gql } from "@apollo/client"
import { GameFragment } from "../fragments/highlight"

export const QUERY_GAMES = gql`
  {
    games {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String) {
    games(filters: { slug: { contains: $slug } }) {
      data {
        attributes {
          name
          description
          short_description
          price
          rating
          release_date
          cover {
            data {
              attributes {
                url
              }
            }
          }
          galery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          plataforms {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
