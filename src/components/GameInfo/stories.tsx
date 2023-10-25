import { StoryFn, Meta } from "@storybook/react"
import { CartContextData } from "../../hooks/use-cart"
import GameInfo, { GameInfoProps } from "."
import mockGame from "./mock"

export default {
  title: "GameInfo",
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: mockGame,
} as Meta

export const Default: StoryFn<GameInfoProps> = (args) => (
  <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: StoryFn<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true,
}
