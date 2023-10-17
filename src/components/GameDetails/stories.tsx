import { StoryFn, Meta } from "@storybook/react"
import GameDetails, { GameDetailsProps } from "."

export default {
  title: "Game/GameDetails",
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    platforms: ["windows", "linux", "mac"],
  },
  argTypes: {
    platforms: {
      control: {
        type: "inline-check",
        options: ["windows", "linux", "mac"],
      },
    },
  },
} as Meta

export const Default: StoryFn<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <GameDetails {...args} />
  </div>
)
