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
<section id="news" className="section-4 carousel showcase news">
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
        
        {/* <BlogPosts posts={posts} />  */}
        { posts.length ? posts.map((post, index) =><div key={index} className="">
        <div className="card p-0 text-center item">
            <div className="image-over">
              <img src={post.imageUrl ? post.imageUrl : 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'} alt="Lorem ipsum" />
            </div>

            
            <div className="card-caption col-12 p-0">
              <div className="card-body">
                <Link href={`/article/${post.slug}`}>
                <a><h4 className="text-xl font-medium">{post.title}</h4></a>
                </Link>
              </div>
              <div className="card-footer d-lg-flex align-items-center justify-content-center">
                <a href="#" className="d-lg-flex align-items-center"><i className="icon-user" />
                  {`${post.author?.profile.first_name}`}
                </a>
                <a href="#" className="d-lg-flex align-items-center">
                <i className="icon-clock"> </i>
                {moment(post.createdAt).format('Do MMMM')}
                </a>
              </div>
            </div>
          </div>
          </div>) : <PostsPlaceHolder/>}  
  
      </div>
    </div>
  </div>
</div>      
</section>

    )
}

export default React.memo(Articles)