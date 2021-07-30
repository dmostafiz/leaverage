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


            {/* {posts?posts.map((post, index) => <div key={post._id} className="card p-0 text-center item">
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
          </div>) : <PostsPlaceHolder count={8}/>} */}


<BlogPosts posts={posts} />

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
