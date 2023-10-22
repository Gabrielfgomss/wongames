import { gql } from "@apollo/client"

export const QUERY_GAMES = gql`
  # Write your query or mutation here
  {
    games {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
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
          price
        }
      }
    }
  }
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
