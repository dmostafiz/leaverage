import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {makeAuthentication} from '../../state/auth/actions'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import Link from 'next/link'
import AuthLayout from '../Layouts/AuthLayout';
import Logo from '../Components/Logo'

const Signup = () => {
    return (
      <AuthLayout title="Sign Up">
        <div className="h-screen flex flex-col md:flex-row">
            
            <div className="md:w-3/5 p-4 md:p-10 flex justify-center">
                <div className="md:p-32 flex flex-col gap-3 justify-center">
                    <a href="/">
                        <Logo type="dark" width="200" />
                    </a>
                    <h5 className="mt-2 text-lg">Worldwide best frelance developers</h5>
                    <div>
                        <p>We are excited to launch our new company and product Azia. After being featured in too many magazines to mention and having created an online stir, we know that BootstrapDash is going to be big. We also hope to win Startup Fictional Business of the Year this year.</p>
                        
                        <a href="index.html" className="btn btn-outline-indigo mt-3">Learn More</a>
                    </div>
                </div>
            </div>{/* az-column-signup-left */}
            
            <div className="md:w-2/5 az-column-signup">
                    {/* <a href="/">
                        <h1 className="az-logo">DMostafiz</h1>
                    </a> */}
                <div className="az-signup-header">
                <h2 className="text-3xl mb-2">Get Started</h2>
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
                <div className="az-signup-footer py-3">
                  <p>Already have an account? <Link href="/sign-in"><a>Sign In</a></Link></p>
                </div>{/* az-signin-footer */}
            </div>{/* az-column-signup */}
         
         </div>{/* az-signup-wrapper */}
      </AuthLayout>
    )
}

export default Signup;
