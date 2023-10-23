import GamesTemplate, { GamesTemplateProps } from "@/templates/Games"
import filterItemsMock from "@/components/ExploreSidebar/mock"

export default async function GamesPage() {
  const { props }: { props: GamesTemplateProps } = getProps()
  return <GamesTemplate {...props} />
}

export function getProps() {
  return {
    props: {
      filterItems: filterItemsMock,
    },
  }
}
