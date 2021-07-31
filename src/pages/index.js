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
import {getInitialSliders} from '../../state/slider/actions'
import TestSlider from '../Components/DefaultLayout/Home/testSlider';
import DefaultLayout from '../Layouts/DefaultLayout'
import Skeleton from 'react-loading-skeleton';
import ProfileAndReview from '../Components/DefaultLayout/ProfileAndReview'

function Home(props) {

const dispatch = useDispatch()

useEffect(() => {

console.log(props.topArticles)

dispatch(getInitialSliders(props.sliders))
}, [])

return (
<DefaultLayout>
  <HeroSlider />

  <ProfileAndReview />
 
  <Articles />

  <div className="shadow bg-cover bg-center h-auto text-white object-fill"
    style={{backgroundImage: 'url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg)', backgroundSize:'cover'}}>
    <div
      className="bg-cover bg-center h-auto text-white py-24 md:py-48 px-5 object-fill bg-gradient-to-r from-green-700 to-transparent">
      <div className="max-w-6xl mx-auto">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold mb-3">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an
          unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
        <a href="#"
          className="bg-white py-4 px-8 text-green-500 font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact
          us</a>
      </div>
    </div>
  </div>
  <Services />
  <Testimonials />
  <Subscribe />
  {/*
  <AboutImage />
  <AboutVideo />
  <Contact /> */}
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

// const data = await fetch(`${process.env.API}/post/get/top/6`)

// console.log(data)

// const topArticles = await data.json()

return {
sliders,
// topArticles
}

}

export default Home