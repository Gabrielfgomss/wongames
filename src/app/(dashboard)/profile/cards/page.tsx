import CardsList, { CardsListProps } from "@/components/CardList"
import Profile from "@/templates/Profile"

import mockCards from "@/components/PaymentOptions/mock"

export default async function ProfileCards() {
  const { props }: { props: CardsListProps } = await getProps()
  return (
    <Profile>
      <CardsList cards={props.cards} />
    </Profile>
  )
}

export async function getProps() {
  return {
    props: {
      cards: mockCards,
    },
  }
}
