import { StoryFn, Meta } from "@storybook/react"
import PaymentOptions, { PaymentOptionsProps } from "."

import cardsMock from "./mock"

export default {
  title: "PaymentOptions",
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
  argTypes: {
    cards: {
      type: undefined,
    },
    handlePayment: {
      action: "clicked",
    },
  },
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta

export const Default: StoryFn<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
