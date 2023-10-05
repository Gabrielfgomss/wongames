import { render, screen } from "@testing-library/react"
import Button from "."
import { renderWithTheme } from "../../utils/tests/helpers"

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', {name: /Button/i})).toHaveStyle({
      "height": "4rem",
      "padding": "0.8rem 3.2rem",
      "font-size": "1.4rem"
    })
  })

  it("should render the small size by default", () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', {name: /Button/i})).toHaveStyle({
      "height": "4rem",
      "padding": "0.8rem 3.2rem",
      "font-size": "1.4rem"
    })
  })

  it("should render the large size by default", () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', {name: /Button/i})).toHaveStyle({
      "height": "5rem",
      "padding": "0.8rem 4.8rem",
      "font-size": "1.6rem"
    })
  })

  it("should render the large size by default", () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', {name: /Button/i})).toHaveStyle({
      "width": "100%"
    })
  })
})
