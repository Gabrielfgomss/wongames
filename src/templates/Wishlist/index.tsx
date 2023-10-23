"use client"

import Showcase from "../../components/Showcase"
import { Container } from "../../components/Container"
import { HighlightProps } from "../../components/Highlight"
import Heading from "../../components/Heading"
import GameCard, { GameCardProps } from "../../components/GameCard"
import Empty from "../../components/Empty"
import { Grid } from "../../components/Grid"
import { Divider } from "../../components/Divider"

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight,
  recommendedTitle,
}: WishlistTemplateProps) => (
  <>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title={recommendedTitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </>
)

export default Wishlist
