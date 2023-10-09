import { Meta, StoryObj } from "@storybook/react/"
import Highlight, { HighlightProps } from "."

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Read Dead it’s back",
    subtitle: "Come see John’s new adventures",
    backgroundImage: "/img/red-dead-img.jpg",
    buttonLabel: "Buy now",
    buttonLink: "/rdr2",
  },
} as Meta<HighlightProps>

export const Default: StoryObj<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: StoryObj<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: "/img/red-dead-float.png",
}