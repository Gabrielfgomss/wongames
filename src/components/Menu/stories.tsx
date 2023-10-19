import { Meta, StoryFn } from "@storybook/react"
import Menu, { MenuProps } from "."

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn<MenuProps> = (args) => <Menu {...args} />

export const Logged: StoryFn<MenuProps> = (args) => <Menu {...args} />

Logged.args = {
  userName: "John Doe",
}
