import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import JSLoader from '../../../helpers/JSLoader'
import Loading from '../Loading'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PostsPlaceHolder from '../../../helpers/PostsPlaceHolder'
import BlogPosts from './BlogPosts'
// import Placeholder from 'react-select/src/components/Placeholder'

 const Articles = () => {

  const[posts, setPosts] = useState([])

  useEffect(async () => {

    // setTimeout(async () => {

      const response = await fetch(`${process.env.API}/post/get/top/4`)
  
      const jsonData = await response.json()
  
      console.log('Artcles: ',jsonData)
  
    
      setPosts(jsonData)
    // }, 5000)

  }, [])

    return (
<section id="news" className="">
<div className="container max-w-6xl">
  <div className="overflow-holder">
    <div className="container">
      <div className="row intro">
        <div className="col-12 col-md-9 align-self-center text-center text-md-left">
          <h2 className="text-4xl font-bold tracking-wide">Top Articles</h2>
          <p>Every week we publish exclusive content on various topics.</p>
        </div>
        <div className="col-12 col-md-3 align-self-end">
         <Link href="/articles">
          <a className="btn mx-auto mr-md-0 ml-md-auto primary-button"><i className="icon-grid" />VIEW ALL</a>
         </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        
         { posts.length ? <BlogPosts posts={posts} /> : <PostsPlaceHolder/>} 

      </div>
    </div>
  </div>
</div>      
</section>

    )
}

export default React.memo(Articles)