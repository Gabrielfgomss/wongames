import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
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

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = "medium",
    fullWidth = false,
    minimal = false,
    ...props
  }: ButtonProps,
  ref,
) => (
  <S.Wrapper
    size={size}
    minimal={minimal}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
