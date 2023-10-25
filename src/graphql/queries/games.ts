import { SuspenseQueryHookOptions, gql } from "@apollo/client"
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { GameFragment } from "../fragments/game"

export const QUERY_GAMES = gql`
  query QueryGames(
    $start: Int
    $limit: Int
    $where: GameFiltersInput
    $sort: [String]
  ) {
    games(
      pagination: { start: $start, limit: $limit }
      filters: $where
      sort: $sort
    ) {
      data {
        id
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
        id
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
export function useQueryGames(options?: SuspenseQueryHookOptions) {
  return useQuery(QUERY_GAMES, options)
}
