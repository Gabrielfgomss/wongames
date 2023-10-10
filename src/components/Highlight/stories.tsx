import { Meta, StoryFn } from "@storybook/react/"
import Highlight, { HighlightProps } from "."
import item from "./mock"

export default {
  title: "Highlight",
  component: Highlight,
  args: { ...item },
} as Meta<HighlightProps>

export const Default: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: "/img/red-dead-float.png",
}
