import { Meta, StoryFn } from "@storybook/react"
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart"

import Button from "."

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: undefined,
    },
  },
} as Meta

export const Default: StoryFn = (args) => <Button {...args} />

Default.args = {
  children: "Buy now",
}

export const withIcon: StoryFn = (args) => <Button {...args} />

withIcon.args = {
  children: "Buy now",
  icon: <AddShoppingCart />,
  size: "small",
}

export const asLink: StoryFn = (args) => <Button {...args} />

asLink.args = {
  children: "Buy now",
  size: "large",
  as: "a",
  href: "/link",
}
