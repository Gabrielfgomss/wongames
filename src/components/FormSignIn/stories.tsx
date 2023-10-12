import { StoryFn, Meta } from "@storybook/react"
import FormSignIn from "."

export default {
  title: "Form/FormSignIn",
  component: FormSignIn,
} as Meta

export const Default: StoryFn = () => (
  <div style={{ width: 300, margin: "auto" }}>
    <FormSignIn />
  </div>
)
