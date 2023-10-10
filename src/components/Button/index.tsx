import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import * as S from "./styles"

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  minimal?: boolean
} & ButtonTypes

const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    minimal={minimal}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
