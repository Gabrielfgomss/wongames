import { StoryFn, Meta } from "@storybook/react"
import FormProfile from "."

export default {
  title: "Form/FormProfile",
  component: FormProfile,
} as Meta

export const Default: StoryFn = () => (
  <div style={{ maxWidth: 860, margin: "auto" }}>
    <FormProfile />
  </div>
)
