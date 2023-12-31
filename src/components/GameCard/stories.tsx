import { StoryFn, Meta } from "@storybook/react"
import GameCard, { GameCardProps } from "."
import { CartContextData } from "../../hooks/use-cart"

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    slug: "population-zero",
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    promotionalPrice: 200,
    price: 250,
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: StoryFn<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true,
}

export const WithRibbon: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary",
}
