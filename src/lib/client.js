import { HttpLink } from "@apollo/client"
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { initializeApollo } from "./apollo-client"

export const initializeApolloServer = (jwt) => {
  const { getClient } = registerApolloClient(() => {
    return initializeApollo(jwt)
  })

  return getClient
}

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              keyArgs: false,

              merge(existing = [], incoming) {
                return [...existing, ...incoming.data]
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: "http://localhost:1337/graphql",
    }),
  })
})
