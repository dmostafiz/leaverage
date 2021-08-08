import React from 'react'
import Link from 'next/link'
// import { getMenuPlacement } from 'react-select/src/components/Menu'
import GetMeFiverr from './GetMeFiverr'
import OurVideo from './Home/OurVideo'

export default function ProfileAndReview() {
return (
<>

<section className="max-w-6xl mx-auto text-blueGray-700 -mt-16 md:mt-0">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-3">

    <div className="w-full md:w-2/6 px-8 md:px-0 mb-6 md:mb-0">

       <OurVideo />

    </div>

    <div className="w-full md:w-4/6 flex flex-col items-start text-left lg:flex-grow px-10">
      <h2 className="mb-8 text-sm font-semibold tracking-widest text-black uppercase title-font">
        Scalabe Deployment
      </h2>
      <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-black title-font">We are full stack developers, <br/> we take ideas and transform them for deploy. </h1>
      <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700">Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.You are going to have fun building it, I did..</p>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-8">

      <div className="w-full">
          <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/768px-DigitalOcean_logo.svg.png" />
        </div>

        <div className="w-full">
          <img className="w-full" src="https://cdn.iconscout.com/icon/free/png-512/aws-1869025-1583149.png" />
        </div>



        <div className="w-full">
          <img className="w-full" src="https://idcloudace.files.wordpress.com/2019/11/cloud-lockup-logo.png?resize=200%2C200" />
        </div>

        <div className="w-full">
          <img className="w-full" src="https://o.remove.bg/downloads/dca36885-ac53-4450-a355-1d6ca6aa58d9/Screen-Shot-2018-12-29-at-23.44.59-removebg-preview.png" />
        </div>

        {/* <div className="w-full">
          <img className="w-full" src="https://o.remove.bg/downloads/9f0f26ab-a551-4dd5-821d-413a9e444422/Untitled-1-1-removebg-preview.png" />
        </div> */}


      </div>
    </div>
  
  </div>
</section>

        

</>
)
}