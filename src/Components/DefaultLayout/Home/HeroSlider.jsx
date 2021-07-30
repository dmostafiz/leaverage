import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitialSliders } from '../../../../state/slider/actions'
import Image from 'next/image'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';

function HeroSlider() {

// const dispatch = useDispatch()
// const sliders = useSelector(state => state.sliders.sliders)

const [sliders, setSliders] = useState([])

useEffect(async () => {

const response = await axios.get(`${process.env.API}/slider/getactive`)
const data = await response.data

// setTimeout(() => {

setSliders(data)

// }, 5000)
}, [])

return (

<>
  {/* { sliders.length ? */}
  <div className="w-full h-screen">
    <Swiper spaceBetween={0} slidesPerView={1} onSlideChange={()=> console.log('slider working')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      { sliders.map((slider, index) => (

      <SwiperSlide key={index}>
        <div className="bg-gradient-to-r from-gray-900 via-green-900 to-yellow-400 pb-10 min-h-screen flex justify-center items-center align-middle pt-32">
       
         <div className="mx-auto max-w-6xl flex flex-col md:flex-row ">
            <div className="w-full md:w-2/3 pb-10 flex flex-col relative px-10 md:px-0 justify-center items-start gap-5">
                <h1 className="text-green-500 text-5xl md:text-7xl font-extrabold "
                  dangerouslySetInnerHTML={{ __html: slider.title }}></h1>
                <p className="text-gray-50 text-2xl md:text-3xl" dangerouslySetInnerHTML={{ __html: slider.description }}>
                </p>

                {slider.hasButton && <a target="_blank" href={slider.buttonLink}
                  style={{ backgroundColor: slider.buttonBgColor, color: slider.buttonTextColor }}
                  className="mt-4 btn primary-button">
                  <i className="icon-cup" />
                  {slider.buttonName}
                </a>}
              </div>

            <div className="w-full md:w-1/3 flex justify-center items-center px-3 md:px-0">

                <div className="bg-gray-800 px-3 py-1 pt-4 bg-opacity-50 rounded-md shadow-lg">
                  <div className="flex flex-col mb-8">
                    <h2 className="text-gray-50 font-semibold text-2xl tracking-wide mb-2">Why you should hire us?</h2>
                    <p className="text-gray-50 text-base">We working as a giant team with worldwide best freelancers. When
                      we take over, you will relax on your path. </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg shadow-inner">
                    <div className="py-4 px-4">
                      <div className="flex flex-col">
                        <h4 className="text-gray-500 text-lg font-semibold mb-3">We're currently working on</h4>
                        <div className="flex flex-col text-sm text-gray-500">
                          <span className="mb-1">The next generation Native Apps</span>
                          <span className="mb-1">Online business with new concepts!</span>
                          <span className="mb-1">Blockchain technology</span>
                          <span className="mb-1">Ecommerce and Multi level Marketing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <a href="#"
                      className="block tracking-widest uppercase text-center shadow bg-yellow-400 hover:bg-yellow-500 text-light font-extrabold py-3 rounded">Hire
                      Us</a>
                  </div>
                </div>

              </div>
         </div>

        </div>
      </SwiperSlide>
      ))}
</ Swiper>
</div> : <div></div>
{/* } */}

</>
)

}

export default HeroSlider