"use client"

import Home from "@/templates/Home"
import bannersMock from "@/components/BannerSlider/mock"
import gamesMock from "@/components/GameCardSlider/mock"
import highlightMock from "@/components/Highlight/mock"
import { useQuery, gql } from "@apollo/client"

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
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        data {
          attributes {
            name
          }
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  const { props } = dynamicData()

  return <Home {...props} />
}
