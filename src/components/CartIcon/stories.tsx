import { StoryFn, Meta } from "@storybook/react"
import CartIcon, { CartIconProps } from "."

export default {
  title: "CartIcon",
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn = () => <CartIcon />
export const withItems: StoryFn<CartIconProps> = (args) => (
  <CartIcon {...args} />
)

withItems.args = {
  quantity: 3,
}
