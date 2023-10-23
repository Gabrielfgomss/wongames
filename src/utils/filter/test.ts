import { parseQueryStringToWhere } from "."

const filterItems = [
  { name: "price", type: "radio" },
  { name: "platforms", type: "checkbox" },
  { name: "developers", type: "checkbox" },
  { name: "sort", type: "radio" },
]

const queryString = {
  price: { lte: 200 },
  platforms: { name: { contains: "linux" } },
}

describe("parseQueryStringToWhere()", () => {
  it("should parse queryString to where format", () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price: { lte: 200 },
      platforms: { name: { contains: "linux" } },
    })
  })
})
