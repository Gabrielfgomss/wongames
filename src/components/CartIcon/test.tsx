import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"

import CartIcon from "."
import { CartContextDefaultValues } from "../../hooks/use-cart"

describe("<CartIcon />", () => {
  it("should render without badge", () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it("should render with badge", () => {
    renderWithTheme(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 },
    })

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})
