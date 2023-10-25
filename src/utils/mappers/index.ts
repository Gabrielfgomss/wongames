import formatPrice from "../format-price"

export const gamesMapper = (games) => {
  return games.map((game) => {
    return {
      id: game.id,
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337${game.attributes.cover?.data?.attributes.url}`,
      price: game.attributes.price,
    }
  })
}

export const highlightMapper = (highlight) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background.data.attributes.url}`,
        floatImage: `http://localhost:1337${highlight.floatimage.data.attributes.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment,
      }
    : {}
}

export const cartMapper = (games) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `http://localhost:1337${game.attributes.cover?.data?.attributes.url}`,
        title: game.attributes.name,
        price: formatPrice(game.attributes.price),
      }))
    : []
}
