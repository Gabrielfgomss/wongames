"use client"

import { Container } from "../../components/Container"
import { Divider } from "../../components/Divider"
import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"
import PaymentOptions, {
  PaymentOptionsProps,
} from "../../components/PaymentOptions"
import CartList, { CartListProps } from "../../components/CartList"
import Heading from "../../components/Heading"
import Showcase from "../../components/Showcase"
import * as S from "./styles"

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
} & CartListProps &
  Pick<PaymentOptionsProps, "cards">

const Cart = ({
  recommendedGames,
  recommendedTitle,
  recommendedHighlight,
  cards,
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </>
  )
}

export default Cart
