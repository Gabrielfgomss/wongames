import Wishlist, { WishlistTemplateProps } from "@/templates/Wishlist"
import gamesMock from "@/components/GameCardSlider/mock"
import highlightMock from "@/components/Highlight/mock"

export async function getProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock,
      games: gamesMock,
    },
  }
}

export default async function WishlistPage() {
  const { props }: { props: WishlistTemplateProps } = await getProps()
  return <Wishlist {...props} />
}
