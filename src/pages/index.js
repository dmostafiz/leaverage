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

function Home(props) {

  const dispatch = useDispatch()


  useEffect(() => {

    console.log(props.topArticles)


    dispatch(getInitialSliders(props.sliders))
  }, [])

  return (
      <DefaultLayout>
        <HeroSlider /> 


{/* This is an example component */}
<div className="max-w-6xl mx-auto mt-72 md:mt-0">
<div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">

{/* review item */}
<div className="col-span-2 bg-white shadow px-4 py-4 ">
  <div className="mb-1 tracking-wide px-4 ">
    <h2 className="text-gray-800 font-semibold mt-1">Clients reviews</h2>
    <div className="border-b -mx-8 px-8 ">
      <div className="flex items-center mt-1">
        <div className=" w-1/5 text-green-500 tracking-tighter">
          <span>5 star</span>
        </div>
        <div className="w-3/5">
          <div className="bg-gray-300 w-full rounded-lg h-2">
            <div className=" w-7/12 bg-green-400 rounded-lg h-2" />
          </div>
        </div>
        <div className="w-1/5 text-gray-700 pl-3">
          <span className="text-sm">51%</span>
        </div>
      </div>{/* first */}
      <div className="flex items-center mt-1">
        <div className="w-1/5 text-green-400 tracking-tighter">
          <span>4 star</span>
        </div>
        <div className="w-3/5">
          <div className="bg-gray-300 w-full rounded-lg h-2">
            <div className="w-1/5 bg-green-400 rounded-lg h-2" />
          </div>
        </div>
        <div className="w-1/5 text-gray-700 pl-3">
          <span className="text-sm">17%</span>
        </div>
      </div>{/* second */}
      <div className="flex items-center mt-1">
        <div className="w-1/5 text-green-400 tracking-tighter">
          <span>3 star</span>
        </div>
        <div className="w-3/5">
          <div className="bg-gray-300 w-full rounded-lg h-2">
            <div className=" w-3/12 bg-green-400 rounded-lg h-2" />
          </div>
        </div>
        <div className="w-1/5 text-gray-700 pl-3">
          <span className="text-sm">19%</span>
        </div>
      </div>{/* thierd */}
      <div className="flex items-center mt-1">
        <div className=" w-1/5 text-green-400 tracking-tighter">
          <span>2 star</span>
        </div>
        <div className="w-3/5">
          <div className="bg-gray-300 w-full rounded-lg h-2">
            <div className=" w-1/5 bg-green-400 rounded-lg h-2" />
          </div>
        </div>
        <div className="w-1/5 text-gray-700 pl-3">
          <span className="text-sm">8%</span>
        </div>
      </div>{/* 4th */}
      <div className="flex items-center mt-1">
        <div className="w-1/5 text-green-500 tracking-tighter">
          <span>1 star</span>
        </div>
        <div className="w-3/5">
          <div className="bg-gray-300 w-full rounded-lg h-2">
            <div className=" w-2/12 bg-green-400 rounded-lg h-2" />
          </div>
        </div>
        <div className="w-1/5 text-gray-700 pl-3">
          <span className="text-sm">5%</span>
        </div>
      </div>{/* 5th */}
    </div>
  </div>
  
  
  <div className="w-full px-4">
{/* This is an example component */}
<div className="flex items-center justify-center">
  <div className="bg-white pb-4 rounded w-full">

    <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0 mt-4">
      <div className="border rounded-lg">
        <div className="flex items-center space-x-4 p-4">
          <div className="flex items-center p-4 bg-green-400 text-white rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 h-7" width={24} height={24} viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" /></svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 font-semibold">Total Reviews</p>
            <div className="flex items-baseline space-x-4">
              <h2 className="text-2xl font-semibold">
                342
              </h2>
              {/* <p className="text-green-700 flex font-semibold space-x-1">
                <span>↑</span>
                <span className="font-bold">122</span>
              </p> */}
            </div>
          </div>
        </div>
 
      </div>

      <div className="border rounded-lg">
        <div className="flex items-center space-x-4 p-4">
          <div className="flex items-center p-4 bg-green-400 text-white rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 h-7" width={24} height={24} viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" /></svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 font-semibold">Total Projects</p>
            <div className="flex items-baseline space-x-4">
              <h2 className="text-2xl font-semibold">
                422
              </h2>
              {/* <p className="text-green-700 flex font-semibold space-x-1">
                <span>↑</span>
                <span className="font-bold">122</span>
              </p> */}
            </div>
          </div>
        </div>
 
      </div>
    </div>
  </div>
</div>


<h3 className="font-medium tracking-tight">We working as a giant</h3>
    <p className="text-gray-700 text-sm py-1">
      give your opinion about this item.We working as a giant team with worldwide best freelancersr.
    </p>
    <button className="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">write a review</button>

  </div>
</div>

{/* 

<div className="items-center max-w-lg bg-white shadow overflow-hidden mx-auto">
    <div className="py-4 px-8 mt-3">
      <div className="flex flex-col mb-8">
        <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">Why you should hire us?</h2>
        <p className="text-gray-500 text-base">We working as a giant team with worldwide best freelancers. When we take over, you will relax on your path. </p>
      </div>
      <div className="bg-gray-100 rounded-lg">
        <div className="py-4 px-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-3">We're currently working on</h4>
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
        <a href="#" className="block tracking-widest uppercase text-center shadow bg-green-400 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Hire Us</a>
      </div>
    </div>
  </div> */}





</div>


</div>



        <Articles/>

<div className="shadow bg-cover bg-center h-auto text-white object-fill" style={{backgroundImage: 'url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg)', backgroundSize:'cover'}}>
  <div className="bg-cover bg-center h-auto text-white py-24 md:py-48 px-5 object-fill bg-gradient-to-r from-green-700 to-transparent">
    <div className="max-w-6xl mx-auto">
      <p className="font-bold text-sm uppercase">Services</p>
      <p className="text-3xl font-bold mb-3">Multimedia products</p>
      <p className="text-2xl mb-10 leading-none">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
      <a href="#" className="bg-white py-4 px-8 text-green-500 font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
    </div>  
  </div>
</div>
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

      // const data = await fetch(`${process.env.API}/post/get/top/6`)

      // console.log(data)

      // const topArticles = await data.json()


  return {
    sliders, 
    // topArticles
  }    

}

export default Home