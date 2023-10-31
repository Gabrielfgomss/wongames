import { ApolloLink, HttpLink, NormalizedCacheObject } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"

let apolloClient: NextSSRApolloClient<NormalizedCacheObject>

export default function createClient(jwt) {
  const httpLink = new HttpLink({
    uri: "http://localhost:1337/graphql",
  })

  const authLink = setContext((_, { headers }) => {
    const authorization = jwt ? `Bearer ${jwt}` : ""
    return { headers: { ...headers, authorization } }
  })
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              keyArgs: false,

              merge(existing = [], incoming) {
                console.log(existing)
                return [...existing, ...incoming.data]
              },
            },
          },
        },
        Wishlist: {
          fields: {
            games: {
              merge(_, incoming) {
                return incoming
              },
            },
          },
        },
      },
    }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink.concat(httpLink),
          ])
        : authLink.concat(httpLink),
  })
}

export function initializeApollo(jwt) {
  const apolloClientGlobal = apolloClient ?? createClient(jwt)

  return apolloClientGlobal
}
