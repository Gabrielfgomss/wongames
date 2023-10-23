"use client"

import GameInfo, { GameInfoProps } from "../../components/GameInfo"
import Gallery, { GalleryImageProps } from "../../components/Gallery"
import TextContent from "../../components/TextContent"
import GameDetails, { GameDetailsProps } from "../../components/GameDetails"
import { GameCardProps } from "../../components/GameCard"
import { HighlightProps } from "../../components/Highlight"
import Showcase from "../../components/Showcase"
import { Divider } from "../../components/Divider"
import * as S from "./styles"

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  recommendedTitle: string
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  upcomingTitle: string
}

const Game = ({
  cover,
  upcomingTitle,
  recommendedTitle,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) => (
  <>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>
      <Showcase
        title={upcomingTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </>
)

export default Game
