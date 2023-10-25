import { gql } from "@apollo/client"
import { BannerFragment } from "../fragments/banner"
import { GameFragment } from "../fragments/game"
import { HighlightFragment } from "../fragments/highlight"

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
    newGames: games(
      filters: { release_date: { lte: "2023-10-21" } }
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
    upcomingGames: games(
      filters: { release_date: { gt: "2023-10-21" } }
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
    freeGames: games(filters: { price: { eq: 0 } }) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                id
                attributes {
                  ...GameFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
