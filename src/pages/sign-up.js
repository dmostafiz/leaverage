import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {makeAuthentication} from '../state/auth/actions'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import Link from 'next/link'
import AuthLayout from '../Layouts/AuthLayout';

const Signup = () => {
    return (
      <AuthLayout>
        <div className="az-signup-wrapper">
            <div className="az-column-signup-left">
                <div>
                <i className="typcn typcn-chart-bar-outline" />
                <a href="/">
                    <h1 className="az-logo">DMostafiz</h1>
                </a>
                <h5>Responsive Modern Dashboard &amp; Admin Template</h5>
                <p>We are excited to launch our new company and product Azia. After being featured in too many magazines to mention and having created an online stir, we know that BootstrapDash is going to be big. We also hope to win Startup Fictional Business of the Year this year.</p>
                <p>Browse our site and see for yourself why you need Azia.</p>
                <a href="index.html" className="btn btn-outline-indigo">Learn More</a>
                </div>
            </div>{/* az-column-signup-left */}
            <div className="az-column-signup">
                    <a href="/">
                        <h1 className="az-logo">DMostafiz</h1>
                    </a>
                <div className="az-signup-header">
                <h2>Get Started</h2>
                <h4>It's free to signup and only takes a minute.</h4>
                <form action="https://www.bootstrapdash.com/demo/azia/v1.0.0/template/page-profile.html">
                    <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter your firstname and lastname" />
                    </div>{/* form-group */}
                    <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter your email" />
                    </div>{/* form-group */}
                    <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>{/* form-group */}
                    <button className="btn btn-az-primary btn-block">Create Account</button>
                    <div className="row row-xs">
                    <div className="col-sm-6"><button className="btn btn-block"><i className="fab fa-facebook-f" /> Signup with Facebook</button></div>
                    <div className="col-sm-6 mg-t-10 mg-sm-t-0"><button className="btn btn-primary btn-block"><i className="fab fa-twitter" /> Signup with Twitter</button></div>
                    </div>{/* row */}
                </form>
                </div>{/* az-signup-header */}
                <div className="az-signup-footer">
                <p>Already have an account? <Link href="/sign-in"><a>Sign In</a></Link></p>
                </div>{/* az-signin-footer */}
            </div>{/* az-column-signup */}
         </div>{/* az-signup-wrapper */}
      </AuthLayout>
    )
}

export default Signup;
