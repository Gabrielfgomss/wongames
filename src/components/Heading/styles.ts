import styled, { css } from "styled-components"
import media from "styled-media-query"
import { HeadingProps, lineColors } from "."
import { DefaultTheme } from "styled-components"

export const wrapperModifiers = {
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineLeft: (theme: DefaultTheme, lineColor: lineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: lineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0%;
      bottom: -1rem;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor ?? "primary")};
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor ?? "primary")};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
