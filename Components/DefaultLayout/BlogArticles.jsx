import moment from 'moment';
import Link from 'next/link'
import React from 'react'

export default function BlogArticles({posts}) {
    return (
<section id="blog" className="section-1 section-vs-30 section-vsr-30 body-mode-dark showcase blog-grid masonry news">
  <div data-aos="fade-in" data-aos-delay='100' data-aos-anchor="body" className="container full-grid">
    <div className="row content blog-grid masonry">
      <main className="col-12  p-0">
        <div className="bricklayer items columns-4">
       
            {posts?.map((post, index) => <div className="card p-0 text-center item">
            <div className="image-over">
              <img src={post.imageUrl} alt="Lorem ipsum" />
            </div>

            
            <div className="card-caption col-12 p-0">
              <div className="card-body">
                <Link href={`/article/${post.slug}`}>
                <a><h4>{post.title}</h4></a>
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
