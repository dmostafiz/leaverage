import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Head from 'next/head'
import AboutImage from '../Components/DefaultLayout/About-Image'
import AboutVideo from '../Components/DefaultLayout/About-Video'
import Articles from '../Components/DefaultLayout/Articles'
import Contact from '../Components/DefaultLayout/Contact'
import HeroSlider from '../Components/DefaultLayout/Home/HeroSlider'
import Services from '../Components/DefaultLayout/Services'
import Subscribe from '../Components/DefaultLayout/Subscribe'
import Testimonials from '../Components/DefaultLayout/Testimonials'
import {getInitialSliders} from '../state/slider/actions'
import TestSlider from '../Components/DefaultLayout/Home/testSlider';
import DefaultLayout from '../Layouts/DefaultLayout'

function Home(props) {

  const dispatch = useDispatch()


  useEffect(() => {

    console.log(props.topArticles)





    dispatch(getInitialSliders(props.sliders))
  }, [])

  return (
      <DefaultLayout>
        <HeroSlider /> 
        <Articles posts={props.topArticles}/>
        <Services/>  
        <Testimonials/>
        <Subscribe/>
        {/* <AboutImage/>
        <AboutVideo/>
        <Contact/> */}
      </DefaultLayout>  
  )
}

Home.getInitialProps = async () => {
  const sliders = [
          {
              title: 'Let\'s Build Something.',
              subtitle: 'We work with the most innovative solutions on the market to help you get the best results.',
              imageLink: '/me2.png'
          },
          {
              title: 'Boost your Creativity.',
              subtitle: 'Escape the fad and discover our creative services that will give authority to your brand.',
              imageLink: '/me4.png'
          }, 
          {
              title: 'Reach the Next Level.',
              subtitle: 'Are you ready? Count on us to revolutionize your company\'s online identity.',
              imageLink: '/me5.png'
          }, 
      ]

      const data = await fetch(`${process.env.API}/post/get/top/6`)

      console.log(data)

      const topArticles = await data.json()


  return {sliders, topArticles}    

}

export default Home