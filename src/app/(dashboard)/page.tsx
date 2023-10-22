import Home from "@/templates/Home"
import bannersMock from "@/components/BannerSlider/mock"
import gamesMock from "@/components/GameCardSlider/mock"
import highlightMock from "@/components/Highlight/mock"

function dynamicData() {
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

export default function Index() {
  const { props } = dynamicData()

  return <Home {...props} />
}
