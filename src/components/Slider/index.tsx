import * as S from "./styles"
import { forwardRef } from "react"
import SlickSlider, { CustomArrowProps, Settings } from "react-slick"

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings }: SliderProps,
  ref,
) => (
  <S.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export const ArrowNext = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  ...props
}: CustomArrowProps & { children: React.ReactNode }) => (
  <div {...props}>{children}</div>
)
export const ArrowPrev = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  ...props
}: CustomArrowProps & { children: React.ReactNode }) => (
  <div {...props}>{children}</div>
)

export default forwardRef(Slider)
