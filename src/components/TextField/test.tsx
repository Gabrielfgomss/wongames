import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Email } from "@styled-icons/material-outlined"
import { renderWithTheme } from "../../utils/tests/helpers"

import TextField from "."

describe("<TextField />", () => {
  it("Renders with Label", () => {
    renderWithTheme(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText("Label")).toBeInTheDocument()
  })

  it("Renders without Label", () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument()
  })

  it("Renders with placeholder", () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument()
  })

  it("Changes its value when typing", async () => {
    const onInputChange = jest.fn()
    renderWithTheme(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
      />,
    )

    const input = screen.getByRole("textbox")
    const text = "This is my new text"
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it("Is accessible by tab", () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText("TextField")
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it("Renders with Icon", () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("should render the Icon in the right", () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    )

    expect(screen.getByTestId("icon").parentElement).toHaveStyle("order: 1")
  })

  it("When the input is disabled", () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />)

    expect(screen.getByRole("textbox")).toHaveAttribute("disabled")
  })

  it("Is not accessible by tab when disabled", () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText("TextField")
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it("When has errors", () => {
    renderWithTheme(
      <TextField label="TextField" id="TextField" hasError="Tem um erro" />,
    )

    expect(screen.getByText(/Tem um erro/i)).toBeInTheDocument()
  })
})
