import { StoryFn, Meta } from "@storybook/react"
import Gallery, { GalleryProps } from "."
import items from "./mock"

export default {
  title: "Gallery",
  component: Gallery,
  args: {
    items,
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn<GalleryProps> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <Gallery {...args} />
  </div>
)
