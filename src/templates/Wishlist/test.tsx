import "match-media-mock"
import "session.mock"
import { screen } from "@testing-library/react"
import { renderWithTheme } from "../../utils/tests/helpers"
import { WishlistContextDefaultValues } from "../../hooks/use-wishlist"
import gamesMock from "../../components/GameCardSlider/mock"
import highlightMock from "../../components/Highlight/mock"
import Wishlist from "."

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  recommendedTitle: "You may like these games",
}

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  },
}))

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  },
}))

describe("<Wishlist />", () => {
  it("should render correctly", () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]],
    }

    renderWithTheme(<Wishlist {...props} />, { wishlistProviderProps })
    expect(
      screen.getByRole("heading", { name: /wishlist/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument()
  })

  it("should render empty when there are no games", () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [],
    }
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedTitle="You may like these games"
        recommendedHighlight={highlightMock}
      />,
      { wishlistProviderProps },
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /your wishlist is empty/i }),
    ).toBeInTheDocument()
  })
})
