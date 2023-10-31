import { renderWithTheme, screen } from "../../utils/tests/helpers"
import Spinner from "."

describe("<Spinner />", () => {
  it("Should render correctly", () => {
    renderWithTheme(<Spinner />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
