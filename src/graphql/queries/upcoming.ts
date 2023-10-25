import { gql } from "@apollo/client"
import { GameFragment } from "../fragments/game"
import { HighlightFragment } from "../fragments/highlight"

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
