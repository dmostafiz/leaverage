import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {makeAuthentication} from '../state/auth/actions'
import getAuthUserByToken from '../helpers/getAuthUserByToken'
import Header from '../Components/DefaultLayout/Header';
import Footer from '../Components/DefaultLayout/Footer';
import Head from 'next/head'
import loadJs from 'loadjs'
import cookie from 'js-cookie'

export default function DefaultLayout({children, classes}){
  const dispatch = useDispatch()
  const [loadingSite, setLoadingSite] = useState(true)


    function loadScripts(){
      // loadJs("/assets/js/vendor/jquery.min.js")
      // loadJs("/assets/js/vendor/jquery.easing.min.js")
      // loadJs("/assets/js/vendor/jquery.inview.min.js")
      // loadJs("/assets/js/vendor/popper.min.js")
      // loadJs("/assets/js/vendor/bootstrap.min.js")
      // loadJs("/assets/js/vendor/ponyfill.min.js")
      // loadJs("/assets/js/vendor/slider.min.js")
      // loadJs("/assets/js/vendor/animation.min.js")
      // loadJs("/assets/js/vendor/progress-radial.min.js")
      // loadJs("/assets/js/vendor/bricklayer.min.js")
      // loadJs("/assets/js/vendor/gallery.min.js")
      // loadJs("/assets/js/vendor/shuffle.min.js")
      // loadJs("/assets/js/vendor/cookie-notice.min.js")
      // loadJs("/assets/js/vendor/particles.min.js")
      // loadJs("/assets/js/main.js")

      setLoadingSite(false)
    }


    useEffect(async () =>{

      
      const authCoockie = cookie.get('login')
      if(authCoockie)
      {
        const dcd = JSON.parse(authCoockie)
        const data = await getAuthUserByToken('http://localhost:3333/api/authorize', dcd.token) 
        
        dispatch(makeAuthentication(data))
      }
      
      loadScripts()
      
    },[])

    return (
      <>

      <Head>
        
          <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/slider.min.css"/>
          <link rel="stylesheet" href="/assets/css/main.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/icons.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/animation.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/gallery.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/cookie-notice.min.css"/>
          <link rel="stylesheet" href="/assets/css/default.css"/>
          <link rel="stylesheet" href="/assets/css/theme-custom.css"/>
          
          <script src="/assets/js/vendor/jquery.min.js"></script>
          <script src="/assets/js/vendor/jquery.easing.min.js"></script>
          <script src="/assets/js/vendor/jquery.inview.min.js"></script>
          <script src="/assets/js/vendor/popper.min.js"></script>
          <script src="/assets/js/vendor/bootstrap.min.js"></script>
          <script src="/assets/js/vendor/ponyfill.min.js"></script>
          <script src="/assets/js/vendor/slider.min.js"></script>
          <script src="/assets/js/vendor/animation.min.js"></script>
          <script src="/assets/js/vendor/progress-radial.min.js"></script>
          <script src="/assets/js/vendor/bricklayer.min.js"></script>
          <script src="/assets/js/vendor/gallery.min.js"></script>
          <script src="/assets/js/vendor/shuffle.min.js"></script>
          <script src="/assets/js/vendor/cookie-notice.min.js"></script>
          <script src="/assets/js/vendor/particles.min.js"></script>
          <script src="/assets/js/main.js"></script>

      </Head>

      <Header classes={classes} />
        {children}
      <Footer/>

        <div>
          <div id="search" className="p-0 modal fade" role="dialog" aria-labelledby="search" aria-hidden="true">
            <div className="modal-dialog modal-dialog-slideout" role="document">
              <div className="modal-content full">
                <div className="modal-header" data-dismiss="modal">
                  Search <i className="icon-close" />
                </div>
                <div className="modal-body">
                  <form className="row">
                    <div className="col-12 p-0 align-self-center">
                      <div className="row">
                        <div className="col-12 p-0 pb-3">
                          <h2>What are you looking for?</h2>
                          <p>Search for services and news about the best that happens in the world.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0 input-group">
                          <input type="text" className="form-control" placeholder="Enter Keywords" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0 input-group align-self-center">
                          <button className="btn primary-button"><i className="icon-magnifier" />SEARCH</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Modal [sign] */}
          <div id="sign" className="p-0 modal fade" role="dialog" aria-labelledby="sign" aria-hidden="true">
            <div className="modal-dialog modal-dialog-slideout" role="document">
              <div className="modal-content full">
                <div className="modal-header" data-dismiss="modal">
                  Sign In Form <i className="icon-close" />
                </div>
                <div className="modal-body">
                  <form action="#" className="row">
                    <div className="col-12 p-0 align-self-center">
                      <div className="row">
                        <div className="col-12 p-0 pb-3">
                          <h2>Sign In</h2>
                          <p>Don't have an account? <a href="#" className="primary-color" data-toggle="modal" data-target="#register">Register now</a>.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0 input-group">
                          <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="col-12 p-0 input-group">
                          <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0 input-group align-self-center">
                          <button className="btn primary-button"><i className="icon-login" />LOGIN</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Modal [register] */}
          <div id="register" className="p-0 modal fade" role="dialog" aria-labelledby="register" aria-hidden="true">
            <div className="modal-dialog modal-dialog-slideout" role="document">
              <div className="modal-content full">
                <div className="modal-header" data-dismiss="modal">
                  Register Form <i className="icon-close" />
                </div>
                <div className="modal-body">
                  <form action="#" className="row">
                    <div className="col-12 p-0 align-self-center">
                      <div className="row">
                        <div className="col-12 p-0 pb-3">
                          <h2>Register</h2>
                          <p>Have an account? <a href="#" className="primary-color" data-toggle="modal" data-target="#sign">Sign In</a>.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0 input-group">
                          <input type="text" className="form-control" placeholder="Name" required />
                        </div>
                        <div className="col-12 p-0 input-group">
                          <input type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="col-12 p-0 input-group">
                          <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <div className="col-12 p-0 input-group">
                          <input type="password" className="form-control" placeholder="Confirm Password" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0 input-group align-self-center">
                          <button className="btn primary-button"><i className="icon-rocket" />REGISTER</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Modal [responsive menu] */}
          <div id="menu" className="p-0 modal fade" role="dialog" aria-labelledby="menu" aria-hidden="true">
            <div className="modal-dialog modal-dialog-slideout" role="document">
              <div className="modal-content full">
                <div className="modal-header" data-dismiss="modal">
                  Menu <i className="icon-close" />
                </div>
                <div className="menu modal-body">
                  <div className="row w-100">
                    <div className="items p-0 col-12 text-center">
                      {/* Append [navbar] */}
                    </div>
                    <div className="contacts p-0 col-12 text-center">
                      {/* Append [navbar] */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll [to top] */}
          <div id="scroll-to-top" className="scroll-to-top">
            <a href="#header" className="smooth-anchor">
              <i className="icon-arrow-up" />
            </a>
          </div>
        </div>

      </>
  )
  
}
