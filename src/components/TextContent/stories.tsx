import { StoryFn, Meta } from "@storybook/react/"
import TextContent, { TextContentProps } from "."
import textMock from "./mock"

export default {
  title: "TextContent",
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta<TextContentProps>

export const Default: StoryFn<TextContentProps> = (args) => (
  <TextContent {...args} />
)
