import { QueryHookOptions, gql } from "@apollo/client"
import { GameFragment } from "../fragments/game"
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"

export const QUERY_WISHLIST = gql`
  query QueryWishlist($email: String!) {
    wishlists(filters: { user: { email: { contains: $email } } }) {
      data {
        id
        attributes {
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
  ${GameFragment}
`

export function useQueryWishlist(options?: QueryHookOptions) {
  return useQuery(QUERY_WISHLIST, options)
}
