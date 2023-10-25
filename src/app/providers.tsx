"use client"

import { ApolloWrapper } from "@/lib/apollo-provider"
import { GlobalStyles } from "@/styles/global"
import theme from "@/styles/theme"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import { CartProvider } from "@/hooks/use-cart"
import NextNprogress from "nextjs-progressbar"
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ApolloWrapper>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <GlobalStyles />
            <NextNprogress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
            />
            {children}
          </CartProvider>
        </ThemeProvider>
      </ApolloWrapper>
    </SessionProvider>
  )
}
