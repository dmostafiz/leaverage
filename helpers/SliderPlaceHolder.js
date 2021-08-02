import React from 'react'
// import { SkeletonTheme } from 'react-loading-skeleton'
// import Typography from '@material-ui/core/Typography';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import Skeleton from '@material-ui/lab/Skeleton';

export default function SliderPlaceHolder() {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-green-900 to-green-700 md:to-green-600 pb-10 pt-32 min-h-screen flex justify-center items-center align-middle bg-opacity">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row ">
            <div className="w-full md:w-2/3 pb-10 flex flex-col px-10 md:px-0 justify-center items-start gap-5">

               <div className="w-full flex flex-col">

                    <SkeletonTheme color="#ffffff" highlightColor="#b6b6b6">
                        <Skeleton width="80%" height={50} className="opacity-5 mb-3"/> 
                    
                        <Skeleton width="100%" height={22} count={6} className="opacity-5 mb-1"/>

                        <Skeleton width={140} height={50} className="opacity-5 mt-3" />
                    </SkeletonTheme>
               </div>
            </div>

            <div className="w-full md:w-1/3 flex justify-center items-center px-3 md:px-0">

                <div className="w-screen px-6">
                    <SkeletonTheme color="#ffffff" highlightColor="#b6b6b6">
                        <Skeleton width="100%" height={400} className="opacity-5" />
                    </SkeletonTheme>
                </div>

              </div>
        
        
         </div>

        </div>
    )
}
