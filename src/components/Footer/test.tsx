import { screen } from "@testing-library/react"
import Footer from "."
import { renderWithTheme } from "../../utils/tests/helpers"

describe("<Footer />", () => {
  it("should render the contact columns", () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole("heading", { name: /CONTACT/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /FOLLOW US/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /LINKS/i })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /LOCATION/i }),
    ).toBeInTheDocument()
  })
})
