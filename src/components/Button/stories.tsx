import { Meta, StoryObj } from "@storybook/react"
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from "."

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    icon: {
      type: ""
    }
  }
} as Meta

export const Default: StoryObj = (args) => <Button {...args} />

Default.args = {
  children: "Most populars"
}

export const withIcon: StoryObj = (args) => <Button {...args} />

withIcon.args = {
  children: "Buy now",
  icon: AddShoppingCart,
  size: "small",
}