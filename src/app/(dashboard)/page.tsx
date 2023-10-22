import Home from "@/templates/Home"
import gamesMock from "@/components/GameCardSlider/mock"
import highlightMock from "@/components/Highlight/mock"
import { QUERY_HOME } from "@/graphql/queries/home"
import { getClient } from "@/lib/client"

function dynamicData() {
  return {
    props: {
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  }
}

export default async function Index() {
  const { props } = dynamicData()
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
  console.log(banners)
  return <Home {...props} banners={banners} newGames={newGames} />
}
