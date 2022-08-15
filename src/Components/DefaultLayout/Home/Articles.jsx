// import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import JSLoader from '../../../../helpers/JSLoader'
// import Loading from '../../Loading'
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PostsPlaceHolder from '../../../../helpers/PostsPlaceHolder'
import BlogPosts from '../BlogPosts'
// import Placeholder from 'react-select/src/components/Placeholder'

const Articles = () => {

  const [posts, setPosts] = useState([])

  useEffect(async () => {

    // setTimeout(async () => {

    console.log('process.env.API ', process.env.API)

    const response = await fetch(`${process.env.API}/post/get/random/3`)

    const jsonData = await response.json()

    console.log('Artcles: ', jsonData)


    setPosts(jsonData)
    // }, 5000)

  }, [])

  return (
    <section id="" className="">
      <div className="container max-w-6xl">
        <div className="overflow-holder">
          <div className="align-self-center mb-5">
            <h2 className="text-3xl font-bold tracking-wide  mb-2">Top Articles</h2>
            <p>Every week we publish exclusive content on various topics.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5">

            {posts.length ? <BlogPosts posts={posts} /> : <PostsPlaceHolder />}

          </div>
        </div>
      </div>
    </section>

  )
}

export default React.memo(Articles)