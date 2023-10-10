import { Meta } from "@storybook/react"
import { GameCardProps } from "../GameCard"
import GameCardSlider from "."
import items from "./mock"

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export function Default(args: GameCardProps[]) {
  return (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <GameCardSlider items={args} {...args} />
    </div>
  )
}
