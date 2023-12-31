import { StoryFn, Meta } from "@storybook/react/"
import TextField, { TextFieldProps } from "."
import { Email } from "@styled-icons/material-outlined"

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    label: "E-mail",
    name: "email",
    icon: <Email />,
    id: "Email",
    initialValue: "",
    placeholder: "john.cage@gmail.com",
  },
  argTypes: {
    onInput: { action: "changed" },
    icon: { type: undefined },
  },
} as Meta

export const Default: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withError: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  hasError: "Ops...something is wrong",
}
