import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getInitialSliders} from '../../../../state/slider/actions'

function TestSlider() {
  
  const dispatch = useDispatch()
    const sliders = useSelector(state => state.sliders.sliders)

    useEffect(() =>{
        dispatch(getInitialSliders())
        console.log("Slider Effected")
        console.log('My Sliders: ', sliders)
        
    },[])

      return (
  
      <section id="slider" className="">
          <div className="">
    
           <ul>
            {sliders.length ? sliders.map((slider, index) => (
            <li key={index}>
              <img width="150px" src={slider.imageLink} alt=""/> 
              <h5>{slider.title}</h5>
              <p>{slider.subtitle}</p>
            </li>

            )) : <div>Slider loading.....</div>}

           </ul>

          </div>
          {/* <div className="swiper-pagination" /> */}
      </section>
  
      )
    

}



export default TestSlider