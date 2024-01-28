import ArrowRight from '../../assets/images/chevron_slider_right.png'
import ArrowLeft from '../../assets/images/chevron_slider_left.png'
import { useState } from 'react'
import './slider.scss'


export default function Slider({ imageSlider }) {
      const [currentIndex, setCurrentIndex] = useState(0)
      const nextSlide = () => {
            setCurrentIndex(currentIndex + 1)
            if (currentIndex === imageSlider.length - 1) setCurrentIndex(0)
      }

      const prevSlide = () => {
            setCurrentIndex(currentIndex - 1)
            if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1)
      }
      return(
<section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='slider'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='slider_arrow slider_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='slider_arrow slider_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}

                </>
            } 
        </section>
      )
}
