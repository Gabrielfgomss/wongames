import { render, screen } from "@testing-library/react"
import { Main } from "."

describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole("heading", { name: /react avançado/i }),
    ).toBeInTheDocument()

    // Making snapshot
    // Server para verificar a arvore do DOM quando o teste é realizado para
    // ver se houve mudanças e elas estão corretas
    expect(container.firstChild).toMatchSnapshot()
  })
})
