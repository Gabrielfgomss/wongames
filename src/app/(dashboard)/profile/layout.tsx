import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  if (!session || !session.user) {
    redirect("/sign-in")
  }

  return <>{children}</>
}
