import { StoryObj, Meta } from "@storybook/react"
import GameCard, { GameCardProps } from "."

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    promotionalPrice: "R$ 200,00",
    price: "R$ 250,00",
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta

export const Default: StoryObj<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: StoryObj<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary",
}
