import { StoryFn, Meta } from "@storybook/react"
import Dropdown, { DropdownProps } from "."

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />

Default.args = {
  title: "Click here",
  children: "content",
}
