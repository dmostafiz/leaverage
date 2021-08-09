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

    <div className="w-full md:w-4/6 flex flex-col items-start text-left lg:flex-grow px-10 ">
      <h2 className="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
      Fullstack devs
      </h2>
      <h1 className="mb-3 text-3xl font-bold tracking-tighter text-left text-black title-font">
        We have expertise <br/> 
        in coding, deployment and maintenance.</h1>
      <p className="mb-4 text-base leading-relaxed text-left text-blueGray-700">We follow ideal software development strategy which bridges the gap between our developers & IT experts. We manage cloud deployments on container platform designed to quickly deploy applications and migrate applications for better optimization..</p>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-8">

        <div className="w-full">
          <img className="w-full" src="https://res.cloudinary.com/dgzzionee/image/upload/v1628519606/webexe/digitalocean_vjmp2x.png" />
        </div>

        <div className="w-full">
          <img className="w-full" src="https://res.cloudinary.com/dgzzionee/image/upload/v1628519608/webexe/aws_io4ikd.png" />
        </div>

        <div className="w-full">
          <img className="w-full" src="https://res.cloudinary.com/dgzzionee/image/upload/v1628519605/webexe/google_cloud_c8vcvr.png" />
        </div>

        <div className="w-full">
          <img className="w-full" src="https://res.cloudinary.com/dgzzionee/image/upload/v1628539702/webexe/docker-ico_hurju6.png" />
        </div>

        {/* <div className="w-full">
          <img className="w-full" src="https://res.cloudinary.com/dgzzionee/image/upload/v1628519611/webexe/docker_dktyxa.png" />
        </div> */}


      </div>
    </div>
  
  </div>
</section>

        

</>
)
}