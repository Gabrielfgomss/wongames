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
import Empty from "../../components/Empty"
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
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

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
