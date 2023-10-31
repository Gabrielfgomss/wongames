import { gql } from "@apollo/client"
import { GameFragment } from "../../graphql/fragments/game"

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: WishlistInput!) {
    createWishlist(data: $input) {
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

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: WishlistInput, $id: ID!) {
    updateWishlist(data: $input, id: $id) {
      data {
        id
        attributes {
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
  }
  ${GameFragment}
`
