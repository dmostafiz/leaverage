import React from 'react'

export default function Contact() {
    return (
<section id="contact" className="section-7 form">
  <div className="container">
    <form action="https://leverage.codings.dev/php/form.php" id="leverage-form" className="multi-step-form">
      <input type="hidden" name="section" defaultValue="leverage_form" />
      {/* <input type="hidden" name="reCAPTCHA" /> */}
      {/* Remove this field if you want to disable recaptcha */}
      <div className="row">
        <div className="col-12 col-md-6 align-self-start text-center text-md-left">
          {/* Success Message */}
          <div className="row success message">
            <div className="col-12 p-0">
              <div className="wait">
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading</span>
                </div>
                <h3 className="sending">SENDING</h3>
              </div>
              <div className="done">
                <i className="icon bigger icon-check" />
                <h3>Your message was sent successful. Thanks.</h3>						
                <a href="#" className="btn mx-auto primary-button">
                  <i className="icon-refresh" />
                  REFRESH
                </a>
              </div>
            </div>
          </div>
          {/* Steps Message */}
          <div className="row intro form-content">
            <div className="col-12 p-0">
              {/* Step Title */}
              <div className="step-title">
                <h2 className="featured alt">Let's Talk?</h2>
                <p>Don't wait until tomorrow. Talk to one of our consultants today and learn how to start leveraging your business.</p>
              </div>
              {/* Step Title */}
              <div className="step-title">
                <h2 className="featured alt">Almost There</h2>
                <p>We need some more important information to better understand how we can help you in the best possible way.</p>
              </div>
              {/* Step Title */}
              <div className="step-title">
                <h2 className="featured alt">Are you Ready?</h2>
                <p>Tell us a little about the project you need to create. This is valuable so that we can direct you to the ideal team.</p>
              </div>
            </div>
          </div>
          {/* Steps Group */}
          <div className="row text-center form-content">
            <div className="col-12 p-0">
              <ul className="progressbar">
                <li>Personal Details</li>
                <li>Company Budget</li>
                <li>Service Setup</li>
              </ul>
              {/* Group 1 */}
              <fieldset className="step-group">
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <input type="email" name="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <input type="text" name="name" data-minlength={3} className="form-control field-name" placeholder="Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <input type="text" name="phone" data-minlength={3} className="form-control field-phone" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-12 input-group p-0">
                  <a className="step-next btn primary-button">NEXT<i className="icon-arrow-right-circle left" /></a>
                </div>
              </fieldset>
              {/* Group 2 */}
              <fieldset className="step-group">
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <input type="text" name="company" data-minlength={3} className="form-control field-company" placeholder="Company" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <input type="text" name="manager" data-minlength={3} className="form-control field-manager" placeholder="Manager" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <i className="icon-arrow-down" />
                    <select name="budget" data-minlength={1} className="form-control field-budget">
                      <option>What's your budget range?</option>
                      <option>Less than $2.000</option>
                      <option>$2.000 — $5.000</option>
                      <option>$5.000 — $10.000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 input-group p-0 d-flex justify-content-between justify-content-md-start">
                  <a className="step-prev btn primary-button mr-4"><i className="icon-arrow-left-circle" />PREV</a>
                  <a className="step-next btn primary-button">NEXT<i className="icon-arrow-right-circle left" /></a>
                </div>
              </fieldset>
              {/* Group 3 */}
              <fieldset className="step-group">
                <div className="row">
                  <div className="col-12 input-group p-0">
                    <textarea name="message" data-minlength={3} className="form-control field-message" placeholder="Message" required defaultValue={""} />
                  </div>
                </div>
                <div className="col-12 input-group p-0 d-flex justify-content-between justify-content-md-start">
                  <a className="step-prev btn primary-button mr-4"><i className="icon-arrow-left-circle" />PREV</a>
                  <a className="step-next btn primary-button">SEND<i className="icon-arrow-right-circle left" /></a>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="content-images col-12 col-md-6 pl-md-5 d-none d-md-block">
          {/* Step 1 */}
          <div className="gallery">
            <a className="step-image" data-poster="assets/images/about-2.jpg" href="https://www.youtube.com/watch?v=7e90gBu4pas">
              <i className="play-video icon-control-play" />
              <div className="mask-radius" />
              <img src="assets/images/about-2.jpg" className="fit-image" alt="Contact Us" />
            </a>
          </div>
          {/* Step 2 */}
          <div className="gallery">
            <a className="step-image" href="assets/images/about-3.jpg">
              <img src="assets/images/about-3.jpg" className="fit-image" alt="Contact Us" />
            </a>
          </div>
          {/* Step 3 */}
          <div className="gallery">
            <a className="step-image" href="assets/images/about-4.jpg">
              <img src="assets/images/about-4.jpg" className="fit-image" alt="Contact Us" />
            </a>
          </div>
          {/* Step 4 */}
          <div className="gallery">
            <a className="step-image" href="assets/images/about-leverage.jpg">
              <img src="assets/images/about-leverage.jpg" className="fit-image" alt="Contact Us" />
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>


    )
}
