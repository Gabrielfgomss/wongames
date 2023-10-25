import Home from "@/templates/Home"
import { QUERY_HOME } from "@/graphql/queries/home"
import { getClient } from "@/lib/client"
import { gamesMapper, highlightMapper } from "@/utils/mappers"

export const revalidate = 10

export default async function Index() {
  const { data } = await getClient().query({
    query: QUERY_HOME,
    fetchPolicy: "no-cache",
  })
  const banners = data.banners.data.map((banner) => {
    return {
      image: `http://localhost:1337${banner.attributes.image.data.attributes.url}`,
      title: banner.attributes.title,
      subtitle: banner.attributes.subtitle,

      buttonLabel: banner.attributes.button.label,
      buttonLink: banner.attributes.button.link,

      ...(banner.attributes.ribbon && {
        ribbon: banner.attributes.ribbon.text,
        ribbonColor: banner.attributes.ribbon.color,
        ribbonSize: banner.attributes.ribbon.size,
      }),
    }
  })
  const newGames = gamesMapper(data.newGames.data)
  const upcomingGames = gamesMapper(data.upcomingGames.data)
  const freeGames = gamesMapper(data.freeGames.data)
  const mostPopularGames = gamesMapper(
    data.sections.data.attributes.popularGames.games.data,
  )
  const newGamesTitle = data.sections.data.attributes.newGames.title
  const mostPopularGamesTitle = data.sections.data.attributes.popularGames.title
  const upcomingGamesTitle = data.sections.data.attributes.upcomingGames.title
  const freeGamesTitle = data.sections.data.attributes.freeGames.title
  const mostPopularHighlight = highlightMapper(
    data.sections.data.attributes.popularGames.highlight,
  )
  const upcomingHighlight = highlightMapper(
    data.sections.data.attributes.upcomingGames.highlight,
  )
  const freeHighlight = highlightMapper(
    data.sections.data.attributes.freeGames.highlight,
  )
  return (
    <Home
      banners={banners}
      newGamesTitle={newGamesTitle}
      newGames={newGames}
      upcomingGamesTitle={upcomingGamesTitle}
      upcomingGames={upcomingGames}
      freeGamesTitle={freeGamesTitle}
      freeGames={freeGames}
      mostPopularGamesTitle={mostPopularGamesTitle}
      mostPopularGames={mostPopularGames}
      freeHighlight={freeHighlight}
      mostPopularHighlight={mostPopularHighlight}
      upcomingHighlight={upcomingHighlight}
    />
  )
}
