import { useQueryGames } from "../../graphql/queries/games"
import formatPrice from "../../utils/format-price"
import { cartMapper } from "../../utils/mappers"
import { getStorageItem, setStorageItem } from "../../utils/localStorage"
import { useContext, createContext, useEffect, useState } from "react"

const CART_KEY = "cartItems"

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: "$0.00",
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues,
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])
  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    saveCart([...cartItems, id])
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((itemId: string) => itemId !== id)
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  const { data, loading } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: { in: cartItems },
      },
    },
  })

  const total = data?.games.data.reduce((acc, game) => {
    return acc + game.attributes.price
  }, 0)

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])
  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games.data),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
