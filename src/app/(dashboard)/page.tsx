import Home from "@/templates/Home"
import { QUERY_HOME } from "@/graphql/queries/home"
import { getClient } from "@/lib/client"

export default async function Index() {
  const { data } = await getClient().query({
    query: QUERY_HOME,
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
  const newGames = data.newGames.data.map((game) => {
    return {
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game.attributes.cover?.data?.attributes.url}`,
      price: game.attributes.price,
    }
  })
  const upcomingGames = data.upcomingGames.data.map((game) => {
    return {
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game.attributes.cover?.data.attributes.url}`,
      price: game.attributes.price,
    }
  })
  const freeGames = data.freeGames.data.map((game) => {
    return {
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game.attributes.cover?.data.attributes.url}`,
      price: game.attributes.price,
    }
  })
  const mostPopularGames =
    data.sections.data.attributes.popularGames.games.data.map((game) => {
      return {
        title: game.attributes.name,
        slug: game.attributes.slug,
        developer: game.attributes.developers.data[0].attributes.name,
        img: `http://localhost:1337${game.attributes.cover.data?.attributes.url}`,
        price: game.attributes.price,
      }
    })
  const newGamesTitle = data.sections.data.attributes.newGames.title
  const mostPopularGamesTitle = data.sections.data.attributes.popularGames.title
  const upcomingGamesTitle = data.sections.data.attributes.upcomingGames.title
  const freeGamesTitle = data.sections.data.attributes.freeGames.title
  const mostPopularHighlight = {
    title: data.sections.data.attributes.popularGames.highlight.title,
    subtitle: data.sections.data.attributes.popularGames.highlight.subtitle,
    backgroundImage: `http://localhost:1337${data.sections.data.attributes.popularGames.highlight.background.data.attributes.url}`,
    floatImage: `http://localhost:1337${data.sections.data.attributes.popularGames.highlight.floatimage.data.attributes.url}`,
    buttonLabel:
      data.sections.data.attributes.popularGames.highlight.buttonLabel,
    buttonLink: data.sections.data.attributes.popularGames.highlight.buttonLink,
    alignment: data.sections.data.attributes.popularGames.highlight.alignment,
  }
  const upcomingHighlight = {
    title: data.sections.data.attributes.upcomingGames.highlight.title,
    subtitle: data.sections.data.attributes.upcomingGames.highlight.subtitle,
    backgroundImage: `http://localhost:1337${data.sections.data.attributes.upcomingGames.highlight.background.data.attributes.url}`,
    floatImage: `http://localhost:1337${data.sections.data.attributes.upcomingGames.highlight.floatimage.data.attributes.url}`,
    buttonLabel:
      data.sections.data.attributes.upcomingGames.highlight.buttonLabel,
    buttonLink:
      data.sections.data.attributes.upcomingGames.highlight.buttonLink,
    alignment: data.sections.data.attributes.upcomingGames.highlight.alignment,
  }
  const freeHighlight = {
    title: data.sections.data.attributes.freeGames.highlight.title,
    subtitle: data.sections.data.attributes.freeGames.highlight.subtitle,
    backgroundImage: `http://localhost:1337${data.sections.data.attributes.freeGames.highlight.background.data.attributes.url}`,
    floatImage: `http://localhost:1337${data.sections.data.attributes.freeGames.highlight.floatimage.data.attributes?.url}`,
    buttonLabel: data.sections.data.attributes.freeGames.highlight.buttonLabel,
    buttonLink: data.sections.data.attributes.freeGames.highlight.buttonLink,
    alignment: data.sections.data.attributes.freeGames.highlight.alignment,
  }
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
