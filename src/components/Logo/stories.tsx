import type { Meta, StoryObj } from "@storybook/react"

import Logo, { LogoProps } from "."

export default {
  title: "Logo",
  component: Logo,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryObj<LogoProps> = (args) => <Logo {...args} />
