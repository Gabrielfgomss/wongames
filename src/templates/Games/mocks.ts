import { QUERY_GAMES } from "../../graphql/queries/games"

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 },
  },
  result: {
    data: {
      games: [
        {
          id: "1",
          name: "Sample Game",
          slug: "sample-game",
          price: 518.39,
          developers: [{ name: "sample developer" }],
          cover: {
            url: "sample-game.jpg",
          },
          __typename: "Game",
        },
      ],
    },
  },
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 },
  },
  result: {
    data: {
      games: [
        {
          id: "1",
          name: "Fetch More Game",
          slug: "fetch-more",
          price: 518.39,
          developers: [{ name: "sample developer" }],
          cover: {
            url: "sample-game.jpg",
          },
          __typename: "Game",
        },
      ],
    },
  },
}

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} },
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: "GameConnection",
      },
    },
  },
}
