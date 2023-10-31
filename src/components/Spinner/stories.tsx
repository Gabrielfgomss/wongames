import { StoryFn, Meta } from "@storybook/react/"
import Spinner, { SpinnerProps } from "."

export default {
  title: "Spinner",
  component: Spinner,
} as Meta

export const Default: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />
