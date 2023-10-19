import { StoryFn, Meta } from "@storybook/react"
import CartList, { CartListProps } from "."

import mockItems from "./mock"

export default {
  title: "CartList",
  component: CartList,
  args: {
    items: mockItems,
    total: "R$ 330,00",
  },
  argTypes: {
    items: {
      type: undefined,
    },
  },
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: StoryFn<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: StoryFn<CartListProps> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
