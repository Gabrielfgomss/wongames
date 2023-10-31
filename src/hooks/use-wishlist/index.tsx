import { GameCardProps } from "../../components/GameCard"
import { useQueryWishlist } from "../../graphql/queries/wishlist"
import { useSession } from "next-auth/react"
import { useMemo } from "react"
import { useState } from "react"
import { createContext, useContext, useEffect } from "react"
import { gamesMapper } from "../../utils/mappers"
import { useMutation } from "@apollo/client"
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST,
} from "../../graphql/mutations/wishlist"

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false,
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues,
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const session = useSession()
  console.log(session?.data?.user?.email)
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState([])

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      },
    },
  )

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      },
    },
  )

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.data?.user?.email,
    context: { session },
    variables: {
      email: session?.data?.user?.email as string,
    },
  })

  useEffect(() => {
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems],
  )

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: {
          input: { games: [...wishlistIds, id], user: session?.data?.user?.id },
        },
      })
    }

    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: [...wishlistIds, id] },
        },
      },
    })
  }

  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: {
            games: wishlistIds.filter((gameId: string) => gameId !== id),
          },
        },
      },
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
