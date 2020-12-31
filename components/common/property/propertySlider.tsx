import cx from "clsx"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import { Chevron } from "../../icons"
import "keen-slider/keen-slider.min.css"

const propertySlider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
  })

  return (
    <div className="relative w-full h-full">
      {slider && (
        <div className="absolute flex items-center justify-between w-full h-full p-2" id="arrows">
          <button
            onClick={slider.prev}
            className="p-2 transition-transform duration-150 scale-50 bg-white rounded-full z-1 active:transform focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <Chevron className="w-6 h-6 text-green-400 transition-transform duration-300 transform rotate-90" />
          </button>
          <button
            onClick={slider.next}
            className="p-2 transition-transform duration-150 scale-50 bg-white rounded-full z-1 active:transform focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <Chevron className="w-6 h-6 text-green-400 transition-transform duration-300 transform -rotate-90" />
          </button>
        </div>
      )}
      <div id="images">
        <div ref={sliderRef} className="block overflow-hidden bg-gray-400 rounded-md keen-slider max-w-100">
          {images.map((img) => (
            <img className="keen-slider__slide h-52 sm:h-56 w-100 md:h-96" src={`/${img}.jpg`} alt={img} />
          ))}
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full space-x-2 bottom-10" id="dots">
        {images?.length > 1 &&
          images.map((i, idx) => (
            <button
              key={i}
              onClick={() => slider.moveToSlide(idx)}
              className={cx("p-1 bg-gray-400 border-2 border-white rounded-full", [
                currentSlide === idx && "bg-green-400",
              ])}
            />
          ))}
      </div>
    </div>
  )
}

export default propertySlider
