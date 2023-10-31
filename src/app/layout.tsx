import StyledComponentsRegistry from "@/lib/registry"
import { Providers } from "./providers"
import { getServerSession } from "next-auth"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Providers session={session}>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
