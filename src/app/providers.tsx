"use client"

import { ApolloWrapper } from "@/lib/apollo-provider"
import { GlobalStyles } from "@/styles/global"
import theme from "@/styles/theme"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { CartProvider } from "@/hooks/use-cart"
import NextNprogress from "nextjs-progressbar"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"
import { WishlistProvider } from "@/hooks/use-wishlist"

export function Providers({
  children,
  session,
}: {
  children: ReactNode
  session: Session | null
}) {
  return (
    <SessionProvider session={session}>
      <ApolloWrapper>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <GlobalStyles />
              <NextNprogress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
              />
              {children}
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloWrapper>
    </SessionProvider>
  )
}
