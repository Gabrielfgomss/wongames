"use client"

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr"
import { useSession } from "next-auth/react"
import { initializeApollo } from "./apollo-client"

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const session = useSession()
  const client = initializeApollo(session.data?.user?.jwt)
  return (
    <ApolloNextAppProvider makeClient={() => client}>
      {children}
    </ApolloNextAppProvider>
  )
}
