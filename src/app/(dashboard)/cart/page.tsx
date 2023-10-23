import Cart from "@/templates/Cart"
import itemsMock from "@/components/CartList/mock"
import cardsMock from "@/components/PaymentOptions/mock"
import { QUERY_RECOMMENDED } from "@/graphql/queries/recommended"
import { getClient } from "@/lib/client"
import { gamesMapper, highlightMapper } from "@/types/mappers"

export async function getProps() {
  return {
    props: {
      items: itemsMock,
      total: "$ 430,00",
      cards: cardsMock,
    },
  }
}

export default async function CartPage() {
  const { data } = await getClient().query({ query: QUERY_RECOMMENDED })
  const recommendedTitle = data?.recommended?.data?.attributes.section.title
  const recommendedGames = gamesMapper(
    data?.recommended?.data?.attributes.section.games.data,
  )
  const recommendedHighlight = highlightMapper(
    data?.recommended?.data.attributes.section.highlight,
  )
  const { props } = await getProps()
  return (
    <Cart
      recommendedHighlight={recommendedHighlight}
      recommendedGames={recommendedGames}
      recommendedTitle={recommendedTitle}
      {...props}
    />
  )
}
