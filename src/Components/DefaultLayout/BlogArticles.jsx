import moment from 'moment';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import PostsPlaceHolder from '../../../helpers/PostsPlaceHolder';
import BlogPosts from './BlogPosts';


export default function BlogArticles({posts}) {

  return (
<section id="blog" className="max-w-6xl mx-auto section-vs-0 section-vsr-30 body-mode-dark showcase blog-grid masonry news">
  <div data-aos-anchor="body" className="container full-grid">
  
  <div className="intro mt-4">
      <div className="align-self-center text-center text-md-left">
        <h2 className="text-3xl text-gray-900 text-dark">All articles</h2>
        <p>Focused on results we seek to raise the level of our customers.</p>
      </div>
 
    </div>

    <div className="row">
      <main className="col-12  p-0 mb-5">

        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">


        { posts.length ? <BlogPosts posts={posts} /> : <PostsPlaceHolder count={[1,2,3,4,5,6]}/>} 


        </div>
      </main>
    </div>
    {/* Pagination */}
    <div className="row">
      <div className="col-12">

      </div>
    </div>
  </div>
</section>

    )
}
