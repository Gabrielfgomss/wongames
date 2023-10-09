import { fireEvent, screen } from "@testing-library/react"
import GameCard from "."
import { renderWithTheme } from "../../utils/tests/helpers"
import theme from "../../styles/theme"

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "https://source.unsplash.com/user/willianjusten/300x140",
  price: "R$ 235,00",
}

describe("<GameCard />", () => {
  it("should render the correctly", () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole("heading", { name: /Population Zero/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /Rockstar Games/i }),
    ).toBeInTheDocument()
    expect(screen.getByAltText(/Population Zero/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it("should render price in label", () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText("R$ 235,00")

    expect(price).not.toHaveStyle({ textDecoration: "line-through" })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it("should render a line-through in price when promotional", () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={"R$ 15,00"} />)

    expect(screen.getByText("R$ 235,00")).toHaveStyle({
      textDecoration: "line-through",
    })

    expect(screen.getByText("R$ 15,00")).not.toHaveStyle({
      textDecoration: "line-through",
    })
  })

  it("should render a filled Favorite icon when favorite is true", () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it("should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole("button")[0])

    expect(onFav).toBeCalled()
  })

  it("should render Ribbon", () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" })
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" })
    expect(ribbon).toBeInTheDocument()
  })
})