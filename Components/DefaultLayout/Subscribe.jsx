import React from 'react'

export default function Subscribe() {
    return (
<section id="subscribe" className="section-6 subscribe">
  <div className="container smaller">
    <div className="row text-center intro">
      <div className="col-12">
        <h2>Newsletter</h2>
        <p className="text-max-800">Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you. We promise not to send promotions you don't like.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12 p-0">
        <form action="https://leverage.codings.dev/php/form.php" id="leverage-subscribe" className="row m-auto items">
          <input type="hidden" name="section" defaultValue="leverage_subscribe" />
          {/* <input type="hidden" name="reCAPTCHA" /> */}
          {/* Remove this field if you want to disable recaptcha */}
          <div className="col-12 col-lg-5 m-lg-0 input-group align-self-center item">
            <input type="text" name="name" className="form-control field-name" placeholder="Name" />
          </div>
          <div className="col-12 col-lg-5 m-lg-0 input-group align-self-center item">
            <input type="email" name="email" className="form-control field-email" placeholder="Email" />
          </div>
          <div className="col-12 col-lg-2 m-lg-0 input-group align-self-center item">
            <a className="btn primary-button w-100">SUBSCRIBE</a>
          </div>
          <div className="col-12 text-center">
            <span className="form-alert mt-5 mb-0" />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}
