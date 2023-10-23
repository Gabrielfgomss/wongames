import Wishlist from "@/templates/Wishlist"
import { getClient } from "@/lib/client"
import { QUERY_RECOMMENDED } from "@/graphql/queries/recommended"
import { gamesMapper, highlightMapper } from "@/types/mappers"

export default async function WishlistPage() {
  const { data } = await getClient().query({ query: QUERY_RECOMMENDED })
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
