import React from 'react'
import Link from 'next/link'
// import { getMenuPlacement } from 'react-select/src/components/Menu'
import GetMeFiverr from './GetMeFiverr'

export default function ProfileAndReview() {
return (
<>

<section className="max-w-6xl mx-auto text-blueGray-700 pb-20 md:pb-5 -pt-6 md:pt-20">
  <div className="flex flex-col md:flex-row items-center md:items-center gap-5">
    <div className="w-full md:w-2/6 px-6 md:px-0 mb-5 md:mb-0">
      <GetMeFiverr />
    </div>
    <div className="w-full md:w-4/6 flex flex-col items-start text-left lg:flex-grow px-10">
      <h2 className="mb-8 text-sm font-semibold tracking-widest text-black uppercase title-font">Founder of webexe</h2>
      <h1 className="mb-8 text-3xl font-bold tracking-tighter text-left text-black title-font">We are full stack developers, <br/> we take ideas and transform them for deploy. </h1>
      <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700">Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.You are going to have fun building it, I did..</p>
      <div className="flex flex-wrap w-full mt-2 -mx-4 text-center ">
        <div className="w-1/4 p-4 mt-4 md:w-1/4">
          <img width={60} height={60} src="https://openvpn.net/wp-content/uploads/2018/04/awscloud.svg" />
        </div>
        <div className="w-1/4 p-4 mt-4 md:w-1/4">
        <img width={60} height={60} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png" />
        </div>
        <div className="w-1/4 p-4 mt-4 md:w-1/4">
          <svg width={42} height={42} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF" />
          </svg>
        </div>
        <div className="w-1/4 p-4 mt-4 md:w-1/4">
          <svg width={42} height={42} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.58991 11C2.5245 11 -0.0510283 13.5306 0.000767908 16.5905C0.0516066 19.5934 2.54027 22 5.59027 22C6.8999 22 8.10608 21.5563 9.06016 20.812C10.0143 21.5562 11.2205 22 12.5302 22C13.8398 22 15.046 21.5563 16.0001 20.812C16.9542 21.5562 18.1604 22 19.4701 22C20.7798 22 21.986 21.5563 22.94 20.812C23.8942 21.5562 25.1004 22 26.4101 22C29.4597 22 31.9484 19.5938 31.9992 16.5905C32.051 13.5304 29.4754 11 26.4099 11C25.1111 11 23.9003 11.4542 22.94 12.2104C21.9795 11.4542 20.7686 11 19.4698 11C18.171 11 16.9603 11.4542 15.9999 12.2104C15.0396 11.4542 13.8288 11 12.53 11C11.2312 11 10.0204 11.4542 9.06004 12.2105C8.09965 11.4542 6.88874 11 5.58991 11ZM12.5302 20.7518C11.5705 20.7518 10.6833 20.4441 9.96546 19.9232C10.7071 19.0067 11.1581 17.8512 11.1794 16.5905C11.2016 15.2766 10.7395 14.0604 9.96228 13.1002C10.686 12.5665 11.578 12.2482 12.53 12.2482C13.4821 12.2482 14.374 12.5665 15.0977 13.1001C14.3204 14.0604 13.8582 15.2768 13.8803 16.5906C13.9018 17.8512 14.3529 19.0068 15.0947 19.9233C14.3769 20.4442 13.4898 20.7518 12.5302 20.7518ZM9.91349 16.5697C9.92973 15.6102 9.60767 14.7149 9.06006 13.9908C8.51245 14.7149 8.19039 15.6102 8.20663 16.5697C8.22228 17.4943 8.5373 18.3464 9.06013 19.0368C9.58286 18.3464 9.89783 17.4944 9.91349 16.5697ZM6.94071 16.5905C6.91847 15.2766 7.38057 14.0604 8.15783 13.1002C7.43411 12.5665 6.54203 12.2482 5.58991 12.2482C3.2229 12.2482 1.22685 14.2162 1.26669 16.5697C1.30595 18.8891 3.2289 20.7518 5.59027 20.7518C6.54983 20.7518 7.43703 20.4442 8.15483 19.9232C7.41304 19.0067 6.96205 17.8512 6.94071 16.5905ZM18.1193 16.5905C18.1416 15.2766 17.6795 14.0604 16.9022 13.1001C17.6258 12.5665 18.5178 12.2482 19.4698 12.2482C20.4219 12.2482 21.314 12.5665 22.0378 13.1002C21.2605 14.0604 20.7984 15.2766 20.8206 16.5905C20.8419 17.8512 21.2929 19.0067 22.0347 19.9232C21.3169 20.4442 20.4297 20.7518 19.4701 20.7518C18.5105 20.7518 17.6233 20.4441 16.9054 19.9232C17.6471 19.0067 18.098 17.8512 18.1193 16.5905ZM22.0865 16.5697C22.0703 15.6102 22.3924 14.7148 22.94 13.9907C23.4877 14.7148 23.8097 15.6102 23.7934 16.5697C23.7777 17.4944 23.4627 18.3464 22.94 19.0368C22.4172 18.3464 22.1022 17.4943 22.0865 16.5697ZM26.4101 20.7518C25.4504 20.7518 24.5632 20.4441 23.8453 19.9232C24.587 19.0068 25.0379 17.8513 25.0593 16.5906C25.0817 15.2765 24.6196 14.0603 23.8423 13.1001C24.5659 12.5665 25.4579 12.2482 26.4099 12.2482C28.7771 12.2482 30.7732 14.216 30.7333 16.5697C30.694 18.8895 28.7711 20.7518 26.4101 20.7518ZM16.8534 16.599C16.8696 15.6395 16.5476 14.7442 15.9999 14.0201C15.4523 14.7442 15.1303 15.6395 15.1465 16.599C15.1622 17.5236 15.4772 18.3757 16 19.0661C16.5227 18.3757 16.8377 17.5237 16.8534 16.599Z" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  
  </div>
</section>

        

</>
)
}