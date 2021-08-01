import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {makeAuthentication} from '../../state/auth/actions'
import getAuthUserByToken from '../../helpers/getAuthUserByToken'
import Header from '../Components/DefaultLayout/Header';
import Footer from '../Components/DefaultLayout/Footer';
import Head from 'next/head'
import cookie from 'js-cookie'
import JSLoader from '../../helpers/JSLoader';
import MobileMenu from '../Components/DefaultLayout/MobileMenu';

export default function DefaultLayout({children, classes, title = "Unknown", logoType}){
  const dispatch = useDispatch()

    function loadScripts(){
      JSLoader("/assets/js/vendor/jquery.min.js")
      JSLoader("/assets/js/vendor/jquery.easing.min.js")
      JSLoader("/assets/js/vendor/jquery.inview.min.js")
      JSLoader("/assets/js/vendor/popper.min.js")
      JSLoader("/assets/js/vendor/bootstrap.min.js")
      JSLoader("/assets/js/vendor/ponyfill.min.js")
      JSLoader("/assets/js/vendor/slider.min.js")
      JSLoader("/assets/js/vendor/animation.min.js")
      JSLoader("/assets/js/vendor/progress-radial.min.js")
      JSLoader("/assets/js/vendor/bricklayer.min.js")
      JSLoader("/assets/js/vendor/gallery.min.js")
      JSLoader("/assets/js/vendor/shuffle.min.js")
      JSLoader("/assets/js/vendor/cookie-notice.min.js")
      JSLoader("/assets/js/vendor/particles.min.js")
      JSLoader("/assets/js/main.js")
    }


    useEffect(async () => {

      loadScripts()
      
      const authCoockie = cookie.get('login')
      
      if(authCoockie)
      {
        const dcd = JSON.parse(authCoockie)
        const data = await getAuthUserByToken(`${process.env.API}/authorize`, dcd.token) 
        
        dispatch(makeAuthentication(data))
      }
      
    },[])

    return (
      <>

      <Head>
          <title>{title} - Webexe</title>
          <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/slider.min.css"/>
          <link rel="stylesheet" href="/assets/css/main.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/icons.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/animation.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/gallery.min.css"/>
          <link rel="stylesheet" href="/assets/css/vendor/cookie-notice.min.css"/>
          <link rel="stylesheet" href="/assets/css/default.css"/>
          <link rel="stylesheet" href="/assets/css/theme-custom.css"/>
      
      </Head>

      <Header classes={classes} logoType={logoType}/>
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


          <MobileMenu /> 

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
