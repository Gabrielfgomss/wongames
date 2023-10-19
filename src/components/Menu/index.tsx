import Link from "next/link"
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2"
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search"
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close"
import Logo from "../../components/Logo"
import * as S from "./styles"
import { useState } from "react"
import Button from "../Button"
import MediaMatch from "../MediaMatch"
import CartDropdown from "../../components/CartDropdown"
import CartIcon from "../../components/CartIcon"
import UserDropdown from "../../components/UserDropdown"

export type MenuProps = {
  userName?: string
}

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref legacyBehavior>
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart" legacyBehavior>
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!userName ? (
            <Link href="/sign-in" passHref legacyBehavior>
              <Button as="span">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={userName} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
          {!!userName && (
            <>
              <Link href="/profile/me" passHref legacyBehavior>
                <S.MenuLink>My profile</S.MenuLink>
              </Link>
              <Link href="/profile/wishlist" passHref legacyBehavior>
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>
        {!userName && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref legacyBehavior>
              <Button fullWidth size="large" as="span">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref legacyBehavior>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
