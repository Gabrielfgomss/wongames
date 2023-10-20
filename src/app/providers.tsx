"use client"

import { GlobalStyles } from "@/styles/global"
import theme from "@/styles/theme"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

export function Providers({ children }: PropsWithChildren) {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  )
}
