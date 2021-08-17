import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
// import Head from 'next/head'
// import AboutImage from '../Components/DefaultLayout/About-Image'
// import AboutVideo from '../Components/DefaultLayout/About-Video'
import Articles from '../Components/DefaultLayout/Home/Articles'
// import Contact from '../Components/DefaultLayout/Contact'
import HeroSlider from '../Components/DefaultLayout/Home/HeroSlider'
import Services from '../Components/DefaultLayout/Services'
import Subscribe from '../Components/DefaultLayout/Subscribe'
// import Testimonials from '../Components/DefaultLayout/Testimonials'
import {getInitialSliders} from '../../state/slider/actions'
import DefaultLayout from '../Layouts/DefaultLayout'
import ProfileAndReview from '../Components/DefaultLayout/ProfileAndReview'
import Technologies from '../Components/DefaultLayout/Home/Technologies'


function Home(props) {

const dispatch = useDispatch()

useEffect(() => {

console.log(props.topArticles)

dispatch(getInitialSliders(props.sliders))
}, [])

return (
<DefaultLayout title="Home" logoType="green-light" classes="text-light" nav="home">
  
  <HeroSlider />
  {/* <Services /> */}






  <ProfileAndReview />
 
  <Technologies />
 
  <Services />
  
  <Articles />


  {/* <Testimonials /> */}

  <Subscribe />

  {/*
  <AboutImage />
  <AboutVideo />
  <Contact /> */}

</DefaultLayout>
)
}

Home.getInitialProps = async () => {

return {}

}

export default Home