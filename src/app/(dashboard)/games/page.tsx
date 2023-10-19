import GamesTemplate, { GamesTemplateProps } from "@/templates/Games"
import filterItemsMock from "@/components/ExploreSidebar/mock"
import gamesMock from "@/components/GameCardSlider/mock"

export default async function GamesPage() {
  const { props }: { props: GamesTemplateProps } = await getProps()
  return <GamesTemplate {...props} />
}

export async function getProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  }
}
