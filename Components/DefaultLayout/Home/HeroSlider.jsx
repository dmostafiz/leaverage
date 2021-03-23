import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getInitialSliders} from '../../../state/slider/actions'
import Image from 'next/image'

function HeroSlider() {
  
    // const dispatch = useDispatch()
    const sliders = useSelector(state => state.sliders.sliders)

    // useEffect(() =>{
    //     dispatch(getInitialSliders())
    // },[dispatch])

      return (
  
      <section id="slider" className="hero p-0 odd">
        <div className="swiper-container full-slider slider-h-100">
          <div className="swiper-wrapper">
    
            {sliders.map((slider, index) => (
            <div key={index} className="swiper-slide slide-center">

              <img data-aos="zoom-out-up" data-aos-delay="100" src={slider.imageLink} className="hero-image" alt="Hero Image" />
            
              {/* <Image
                layout="fill"
                src={slider.imageLink} 
                alt="Picture of the author"
                className="hero-image"
                // data-aos="zoom-out-up" 
                // data-aos-delay="800"
                // height="85%"
                // width="auto"
                
              /> */}

            

              <div className="slide-content row" data-mask-768="70">
                <div className="col-12 d-flex inner">
                  <div className="left align-self-center text-center text-md-left">
                    <h1 className="title effect-static-text">{slider.title}</h1>
                    <p className="description">{slider.subtitle}</p>
                    <a href="#contact" data-aos="zoom-out-up" data-aos-delay="1200" className="smooth-anchor ml-auto mr-auto ml-md-0 mt-4 btn primary-button"><i className="icon-cup" />GET STARTED</a>
                  </div>
                </div>
              </div>
            </div>

            ))}

          </div>
          {/* <div className="swiper-pagination" /> */}
        </div>
      </section>
  
      )
    

}

export default HeroSlider