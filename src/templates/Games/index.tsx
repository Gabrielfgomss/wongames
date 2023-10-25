"use client"

import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined/KeyboardArrowDown"
import ExploreSidebar, { ItemProps } from "../../components/ExploreSidebar"
import GameCard, { GameCardProps } from "../../components/GameCard"
import Empty from "../../components/Empty"
import { Grid } from "../../components/Grid"
import * as S from "./styles"
import { useQueryGames } from "../../graphql/queries/games"

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: { limit: 15 },
  })
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.data.length } })
  }

  return (
    <S.Main>
      <ExploreSidebar items={filterItems} onFilter={handleFilter} />

      <section>
        {data?.games.data.length ? (
          <>
            <Grid>
              {data?.games.data.map((game) => (
                <GameCard
                  id={game.id}
                  key={game.attributes.slug}
                  title={game.attributes.name}
                  slug={game.attributes.slug}
                  developer={game.attributes.developers.data[0].attributes.name}
                  img={`http://localhost:1337${game.attributes.cover?.data?.attributes.url}`}
                  price={game.attributes.price}
                />
              ))}
            </Grid>
            <S.ShowMore>
              {loading ? (
                <S.ShowMoreLoading
                  src="/img/dots.svg"
                  alt="Loading more games..."
                />
              ) : (
                <S.ShowMoreButton role="button" onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMoreButton>
              )}
            </S.ShowMore>
          </>
        ) : (
          <Empty
            title=":("
            description="We didn't find any games with this filter"
            hasLink
          />
        )}
      </section>
    </S.Main>
  )
}

export default GamesTemplate
