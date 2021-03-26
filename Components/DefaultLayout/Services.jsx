import React from 'react'

export default function Services() {
    return (
<section id="services" className="section-1 offers">
  <div className="container max-w-6xl">
    <div className="row intro">
      <div className="col-12 col-md-9 align-self-center text-center text-md-left">
        <h2 className="text-3xl">My Services</h2>
        <p>Focused on results we seek to raise the level of our customers.</p>
      </div>
      <div className="col-12 col-md-3 align-self-end">
        <a href="#" className="btn mx-auto mr-md-0 ml-md-auto primary-button"><i className="mb-3 icon-grid" />VIEW ALL</a>
      </div>
    </div>
    <div className="row justify-content-center text-center items">
      <div className="col-12 col-md-6 col-lg-4 item">
        <div className="card">
          <i className="mb-3 icon icon-globe" />
          <h4 className="text-xl mb-1">Website Pro</h4>
          <p>We build professional responsive websites optimized for the most popular search engines.</p>
          <a href="#" className="mt-2"><i className=" btn-icon icon-arrow-right-circle" /></a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 item">
        <div className="card">
          <i className="mb-3 icon icon-basket" />
          <h4 className="text-xl mb-1">E-Commerce</h4>
          <p>Increase your sales with an incredible online store, full of features and functionality.</p>
          <a href="#" className="mt-2"><i className=" btn-icon icon-arrow-right-circle" /></a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 item">
        <div className="card">
          <i className="mb-3 icon icon-screen-smartphone" />
          <h4 className="text-xl mb-1">Mobile Apps</h4>
          <p>Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
          <a href="#" className="mt-2"><i className=" btn-icon icon-arrow-right-circle" /></a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 item">
        <div className="card">
          <i className="mb-3 icon icon-layers" />
          <h4 className="text-xl mb-1">Web Application</h4>
          <p>We build applications for different purposes using technologies that allow you more security.</p>
          <a href="#" className="mt-2"><i className=" btn-icon icon-arrow-right-circle" /></a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 item">
        <div className="card">
          <i className="mb-3 icon icon-chart" />
          <h4 className="text-xl mb-1">Digital Marketing</h4>
          <p>We work to promote your brand in partnership with the best marketing platforms today.</p>
          <a href="#" className="mt-2"><i className=" btn-icon icon-arrow-right-circle" /></a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 item">
        <div className="card">
          <i className="mb-3 icon icon-bulb" />
          <h4 className="text-xl mb-1">Brand Creation</h4>
          <p>We create your brand thinking about your target audience using design techniques.</p>
          <a href="#" className="mt-2"><i className=" btn-icon icon-arrow-right-circle" /></a>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}
