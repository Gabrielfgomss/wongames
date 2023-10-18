import Cart, { CartProps } from "../../templates/Cart"

import itemsMock from "../../components/CardList/mock"
import gamesMock from "../../components/GameCardSlider/mock"
import higlightMock from "../../components/Highlight/mock"
import cardsMock from "../../components/PaymentOptions/mock"

export async function getProps() {
  return {
    props: {
      items: itemsMock,
      total: "$ 430,00",
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock,
    },
  }
}

export default async function CartPage() {
  const { props }: { props: CartProps } = await getProps()
  return <Cart {...props} />
}
