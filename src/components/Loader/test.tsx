import { renderWithTheme, screen } from "../../utils/tests/helpers"
import Loader from "."

describe("<Loader />", () => {
  it("Should render correctly", () => {
    renderWithTheme(<Loader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
