import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import JSLoader from '../../helpers/JSLoader'

 const Articles = ({posts}) => {


    return (
<section id="news" className="section-4 carousel showcase news">
<div className="container max-w-6xl">
  <div className="overflow-holder">
    <div className="container">
      <div className="row intro">
        <div className="col-12 col-md-9 align-self-center text-center text-md-left">
          <h2 className="text-3xl">Top Articles</h2>
          <p>Every week we publish exclusive content on various topics.</p>
        </div>
        <div className="col-12 col-md-3 align-self-end">
         <Link href="/articles">
          <a className="btn mx-auto mr-md-0 ml-md-auto primary-button"><i className="icon-grid" />VIEW ALL</a>
         </Link>
        </div>
      </div>
      <div className="swiper-container mid-slider items">
        <div className="swiper-wrapper">


        {posts ? posts.map((post, index) => <div key={index} className="swiper-slide slide-center item">
            <div className="row card p-0 text-center">
              <div className="image-over">
                <img src={post.imageUrl} alt="Lorem ipsum" />
              </div>
              <div className="card-caption col-12 p-0">
                <div className="card-body">
                  <a href="#">
                    <h4 className="m-0 text-xl font-medium">{post.title}</h4>
                  </a>
                </div>
                <div className="card-footer d-lg-flex align-items-center justify-content-center">
                  <a href="#" className="d-lg-flex align-items-center"><i className="icon-user" />John Doe</a>
                  <a href="#" className="d-lg-flex align-items-center"><i className="icon-clock" />3 Days Ago</a>
                </div>
              </div>
            </div>
          </div>) : <h1>Loading...</h1>}  
  



        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </div>
</div>      
</section>

    )
}

export default React.memo(Articles)