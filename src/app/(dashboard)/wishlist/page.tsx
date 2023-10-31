import Wishlist from "@/templates/Wishlist"
import { initializeApolloServer } from "@/lib/client"
import { QUERY_RECOMMENDED } from "../../../graphql/queries/recommended"
import { gamesMapper, highlightMapper } from "@/utils/mappers"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function WishlistPage() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect("/sign-in")
  }
  const token = session?.user?.jwt
  const { data } = await initializeApolloServer(token)().query({
    query: QUERY_RECOMMENDED,
  })
  const recommendedTitle = data?.recommended?.data?.attributes.section.title
  const recommendedGames = gamesMapper(
    data?.recommended?.data?.attributes.section.games.data,
  )
  const recommendedHighlight = highlightMapper(
    data?.recommended?.data.attributes.section.highlight,
  )
  return (
    <Wishlist
      recommendedGames={recommendedGames}
      recommendedHighlight={recommendedHighlight}
      recommendedTitle={recommendedTitle}
    />
  )
}
