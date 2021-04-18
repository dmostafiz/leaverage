import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ContentLoader, { Facebook } from 'react-content-loader'

// export default function PostsPlaceHolder({count = [1,2,3,4]}) {
//     return (
//         <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
//             {count.map((c, index) => <Facebook />
//                     )} 
//         </div>  
//     )
// }


export default function PostsPlaceHolder({count = [1,2,3,4]}) {
    return (
        <>
         {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4"> */}
            {count.map((c, index) => <SkeletonTheme  color="#c1c1c1" highlightColor="#eeeeee" key={index}>
                <Skeleton count={1} height={200}  />
            </SkeletonTheme>)} 
         {/* </div>   */}
        </>
    )
}
