"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Card from './card'

export default function Corousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div>
              <div>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide"><Card/></div>
                        <div className="embla__slide">Slide 2</div>
                        <div className="embla__slide">Slide 3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}