import Home from "@/templates/Home"
import bannersMock from "@/components/BannerSlider/mock"
import gamesMock from "@/components/GameCardSlider/mock"
import highlightMock from "@/components/Highlight/mock"

// async function staticData() {
//   // const staticData = await fetch(`https://...`, { cache: 'force-cache' })
//   return {
//     props: {
//       heading: "Olha, eu aqui!",
//     },
//   }
// }

async function dynamicData() {
  // const dynamicData = await fetch(`https://...`, { cache: 'no-store' })

  return {
    props: {
      banners: bannersMock,
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
  const { props } = await dynamicData()

  return <Home {...props} />
}
