import React from 'react'

export default function AboutImage() {
    return (
 <section id="about" className="section-2 highlights image-right">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 align-self-center text-center text-md-left">
        <div className="row intro">
          <div className="col-12 p-0">
            <h2 className="featured alt">About Us</h2>
            <p>For over 8 years we have been developing digital solutions for companies looking to gain better visibility on the internet.</p>
          </div>
        </div>
        <div className="row items">
          <div className="col-12 p-0">
            <div className="row item">
              <div className="col-12 col-md-2 align-self-center">
                <i className="icon icon-badge" />
              </div>
              <div className="col-12 col-md-9 align-self-center">
                <h4>Quality</h4>
                <p>Everything we do has the commitment of a well trained and motivated team.</p>
              </div>  
            </div>
            <div className="row item">
              <div className="col-12 col-md-2 align-self-center">
                <i className="icon icon-briefcase" />
              </div>
              <div className="col-12 col-md-9 align-self-center">
                <h4>Experience</h4>
                <p>Focused on results we seek to raise the level of our customers.</p>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="gallery col-12 col-md-6">
        <a href="assets/images/about-1.jpg">
          <img src="assets/images/about-1.jpg" className="fit-image" alt="About Us" />
        </a>
      </div>
    </div>
  </div>
</section>

    )
}
