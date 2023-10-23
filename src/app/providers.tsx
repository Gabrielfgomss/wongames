"use client"

import { ApolloWrapper } from "@/lib/apollo-provider"
import { GlobalStyles } from "@/styles/global"
import theme from "@/styles/theme"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

export function Providers({ children }: PropsWithChildren) {
  return (
    <ApolloWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  )
}
