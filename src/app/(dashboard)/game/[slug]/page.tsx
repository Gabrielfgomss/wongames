import Game from "@/templates/Game"
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "@/graphql/queries/games"
import { getClient } from "@/lib/client"
import { notFound } from "next/navigation"
import { QUERY_RECOMMENDED } from "@/graphql/queries/recommended"
import { QUERY_UPCOMING } from "@/graphql/queries/upcoming"
import { gamesMapper, highlightMapper } from "@/utils/mappers"

export const dynamicParams = true
export const revalidate = 10

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  })

  const paths = data?.games?.data?.map((game) => ({
    slug: game?.attributes.slug,
  }))

  return paths
}

export default async function Page({ params }) {
  const { data } = await getClient().query({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: params?.slug },
  })

  if (!data?.games?.data?.length) {
    return notFound()
  }

  const games = data?.games?.data.map((game) => {
    return {
      cover: `http://localhost:1337${game?.attributes?.cover?.data?.attributes?.url}`,
      gameInfo: {
        id: game.id,
        title: game?.attributes?.name,
        price: game?.attributes?.price,
        description: game?.attributes?.short_description,
      },
      gallery: game?.attributes?.gallery?.data.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label,
      })),
      description: game?.attributes?.description,
      details: {
        developer: game?.attributes?.developers?.data[0]?.attributes.name,
        releaseDate: game?.attributes?.release_date,
        platforms: game?.attributes?.platforms?.data[0]?.attributes.name,
        rating: game?.attributes?.rating,
        publisher: game?.attributes?.publisher?.data?.attributes.name,
      },
    }
  })

  const responseRecommended = await getClient().query({
    query: QUERY_RECOMMENDED,
    fetchPolicy: "no-cache",
  })
  const recommendedTitle =
    responseRecommended.data?.recommended?.data?.attributes.section.title
  const recommendedGames = gamesMapper(
    responseRecommended.data?.recommended?.data?.attributes.section.games.data,
  )

  const TODAY = new Date().toISOString().slice(0, 10)
  const responseUpcoming = await getClient().query({
    query: QUERY_UPCOMING,
    variables: { date: TODAY },
  })
  const upcomingTitle =
    responseUpcoming.data.showcase.data.attributes.upcomingGames.title
  const upcomingGames = gamesMapper(responseUpcoming.data.upcomingGames.data)
  const upcomingHighlight = highlightMapper(
    responseUpcoming.data.showcase.data.attributes.upcomingGames.highlight,
  )

  return (
    <Game
      {...games[0]}
      recommendedGames={recommendedGames}
      recommendedTitle={recommendedTitle}
      upcomingGames={upcomingGames}
      upcomingHighlight={upcomingHighlight}
      upcomingTitle={upcomingTitle}
    />
  )
}
