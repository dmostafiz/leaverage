import moment from 'moment';
import Link from 'next/link'
import React from 'react'

export default function BlogArticles({posts}) {
    return (

<section id="blog" className="max-w-7xl mx-auto section-vs-30 section-vsr-30 body-mode-dark showcase blog-grid masonry news">
  <div data-aos="fade-in" data-aos-delay='100' data-aos-anchor="body" className="container full-grid">

  <div className="row intro mt-3">
      <div className="col-12 col-md-9 align-self-center text-center text-md-left">
        <h2 className="text-3xl text-gray-900 text-dark">Important articles</h2>
        <p>Focused on results we seek to raise the level of our customers.</p>
      </div>
 
    </div>

    <div className="row content blog-grid masonry">
      <main className="col-12  p-0">
        <div className="bricklayer items columns-4">

            {posts?.map((post, index) => <div key={index} className="card p-0 text-center item">
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
                {/* {moment(post.createdAt).fromNow()} */}
                {moment(post.createdAt).format('Do MMMM')}
                </a>
              </div>
            </div>
          </div>)}

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
