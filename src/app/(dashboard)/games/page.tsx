import GamesTemplate, { GamesTemplateProps } from "@/templates/Games"
import filterItemsMock from "@/components/ExploreSidebar/mock"
import { QUERY_GAMES } from "@/graphql/games"
import { getClient } from "@/lib/client.js"

export default async function GamesPage() {
  const { data } = await getClient().query({ query: QUERY_GAMES })
  const games = data?.games?.data?.map((game) => {
    return {
      title: game?.attributes.name,
      slug: game?.attributes.slug,
      img: `http://localhost:1337${game?.attributes?.cover?.data?.attributes?.url}`,
      developers: game?.attributes?.developers?.data[0]?.attributes?.name,
      price: new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(game?.attributes.price),
    }
  })

  const { props }: { props: GamesTemplateProps } = getProps()
  return <GamesTemplate games={games} {...props} />
}

export function getProps() {
  return {
    props: {
      filterItems: filterItemsMock,
    },
  }
}
