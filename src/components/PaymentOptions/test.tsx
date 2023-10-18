import { screen } from "@testing-library/react"

import PaymentOptions from "."
import { renderWithTheme } from "../../utils/tests/helpers"

describe("<PaymentOptions />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<PaymentOptions />)

    expect(
      screen.getByRole("heading", { name: /Payment/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
