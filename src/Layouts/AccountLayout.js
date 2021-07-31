import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Footer from '../Components/DefaultLayout/Footer';
import { useRouter } from 'next/router'
import Head from 'next/head'
import loadJs from 'loadjs'
import nookies from 'nookies'
import Header from '../Components/AccountLayout/Header';
import {makeAuthentication} from '../../state/auth/actions'
import JSLoader from '../../helpers/JSLoader';


export default function AccountLayout({children, user, title = "Unknown"}){
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() =>{
      
      console.log(user)

      dispatch(makeAuthentication(user)) 
 
      if(user.isAuth)
      { 
        JSLoader('/account/lib/jquery/jquery.min.js')
        JSLoader('/account/lib/bootstrap/js/bootstrap.bundle.min.js')
        JSLoader('/account/lib/ionicons/ionicons.js')
        JSLoader('/account/lib/chart.js/Chart.bundle.min.js')
        JSLoader('/account/lib/peity/jquery.peity.min.js')
        
        JSLoader('/account/js/azia.js')
        JSLoader('/account/js/chart.flot.sampledata.js')
        JSLoader('/account/js/dashboard.sampledata.js')

        JSLoader('/account/lib/select2/js/select2.min.js')
      }

      if(!user.isAuth) window.location.replace("/sign-in")
      // if(user.status == 'success' && user.type == 'user') window.location.replace("/account")
      
    },[loadJs])

    return (
      <>
     
      <Head>

        <title>{title} | Webexe</title>

        <link href="/account/lib/fontawesome-free/css/all.min.css" rel="stylesheet" />
        <link href="/account/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/account/lib/typicons.font/typicons.css" rel="stylesheet" />
        <link href="/account/lib/flag-icon-css/css/flag-icon.min.css" rel="stylesheet" />
        <link href="/account/lib/select2/css/select2.min.css" rel="stylesheet"></link>
        <link href="/account/css/azia.css" rel="stylesheet" />
        <link href="/account/lib/quill/quill.snow.css" rel="stylesheet" />
        <link href="/account/lib/quill/quill.bubble.css" rel="stylesheet" />

        {/* <script src="/account/lib/jquery/jquery.min.js"></script> */}
        {/* <script src="/account/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/account/lib/ionicons/ionicons.js"></script>

        <script src="/account/lib/chart.js/Chart.bundle.min.js"></script>
        <script src="/account/lib/peity/jquery.peity.min.js"></script>

        <script src="/account/js/azia.js"></script>
        <script src="/account/js/chart.flot.sampledata.js"></script>
        <script src="/account/js/dashboard.sampledata.js"></script> */}
      </Head>

      {/* <Header/> */}
      {user.isAuth && <> 
        <Header/>
        {children}

        <div className="az-footer ht-40 mt-5">
            <div className="container ht-100p pd-t-0-f">
            <span>© 2019 DMostafiz </span>
            </div>{/* container */}
        </div>{/* az-footer */}
      </> }
      {/* <Footer/> */}

      </>
  )
  
}
