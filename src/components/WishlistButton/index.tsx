import { Favorite, FavoriteBorder } from "@styled-icons/material-outlined"
import Button, { ButtonProps } from "../../components/Button"
import Spinner from "../../components/Spinner"
import { useWishlist } from "../../hooks/use-wishlist"
import { useSession } from "next-auth/react"
import { useState } from "react"

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, "size">

const WishlistButton = ({
  id,
  hasText,
  size = "small",
}: WishlistButtonProps) => {
  const session = useSession()
  const [loading, setLoading] = useState(false)
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const handleClick = () => {
    setLoading(true)
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
    setLoading(false)
  }

  const ButtonText = isInWishlist(id)
    ? "Remove from Wishlist"
    : "Add to Wishlist"

  if (!session) return null

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      onClick={handleClick}
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
