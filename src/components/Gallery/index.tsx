import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos"
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos"
import { Close } from "@styled-icons/material-outlined/Close"
import { useEffect, useRef, useState } from "react"
import SlickSlider from "react-slick"

import Slider, {
  ArrowNext,
  ArrowPrev,
  SliderSettings,
} from "../../components/Slider"

import * as S from "./styles"

const commonSettings: SliderSettings = {
  infinite: false,
  arrows: true,
  lazyLoad: "ondemand",
  nextArrow: (
    <ArrowNext>
      <ArrowRight aria-label="next image" />
    </ArrowNext>
  ),
  prevArrow: (
    <ArrowPrev>
      <ArrowLeft aria-label="previous image" />
    </ArrowPrev>
  ),
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Ao montar o componente
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false)
    }

    window.addEventListener("keyup", handleKeyUp)
    // Ao desmontar o component
    return () => window.removeEventListener("keyup", handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings} ref={slider}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
