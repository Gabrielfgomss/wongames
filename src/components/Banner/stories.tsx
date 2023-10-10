import { Meta, StoryFn } from "@storybook/react"
import Banner, { BannerProps } from "."

export default {
  title: "Banner",
  component: Banner,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
} as Meta

export const Default: StoryFn<BannerProps> = (args) => <Banner {...args} />

export const WithRibbon: StoryFn<BannerProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "primary",
}
