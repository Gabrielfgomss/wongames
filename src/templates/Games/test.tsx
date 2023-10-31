import { screen } from "@testing-library/react"
import "session.mock"
import { MockedProvider } from "@apollo/client/testing"
import { renderWithTheme } from "../../utils/tests/helpers"
import filterItemsMock from "../../components/ExploreSidebar/mock"
import Games from "."

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  },
}))

jest.mock("components/ExploreSidebar", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  },
}))

describe("<Games />", () => {
  it("should render sections", async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    )

    expect(await screen.findByTestId("Mock ExploreSidebar")).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    expect(
      await screen.findByRole("button", { name: /show more/i }),
    ).toBeInTheDocument()
  })

  it("should render more games when show more is clicked", async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole("button", { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it("should render empty when no games found", async () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    )

    expect(
      await screen.findByText(/We didn't find any games with this filter/i),
    ).toBeInTheDocument()
  })
})
