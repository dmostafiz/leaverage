import React from 'react'

export default function AboutVideo() {
    return (
<section id="video" className="section-3 highlights image-left">
  <div className="container">
    <div className="row">
      <div className="gallery col-12 col-md-6">
        <a data-poster="assets/images/about-9.jpg" href="https://www.youtube.com/watch?v=7e90gBu4pas">
          <i className="play-video icon-control-play" />
          <div className="mask-radius" />
          <img src="assets/images/about-9.jpg" className="fit-image" alt="Institutional" />
        </a>
      </div>
      <div className="col-12 col-md-6 pl-md-5 align-self-center text-center text-md-left">
        <div className="row intro">
          <div className="col-12 p-0">
            <h2 className="featured alt">Institutional</h2>
            <p>Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
          </div>
        </div>
        <div className="row items">
          <div className="col-12 p-0">
            <div className="row item">
              <div className="col-12 col-md-2 align-self-center">
                <i className="icon icon-trophy" />
              </div>
              <div className="col-12 col-md-9 align-self-center">
                <h4>Tradition</h4>
                <p>We are excellence in developing web solutions for companies.</p>
              </div>  
            </div>
            <div className="row item">
              <div className="col-12 col-md-2 align-self-center">
                <i className="icon icon-diamond" />
              </div>
              <div className="col-12 col-md-9 align-self-center">
                <h4>Innovation</h4>
                <p>We seek to build something that changes people's lives.</p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
