import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import Header from '../../Components/AccountLayout/Header'
import AccountLayout from '../../Layouts/AccountLayout'
import Cookies from 'js-cookie'
import Router from 'next/router'
import nookies from 'nookies';
import checkAuthAndRedirect from '../../../helpers/checkAuthAndRedirect';

function Index({user}) {
  const authUser = useSelector(state => state.auth)
  // useEffect(()=>{
  //   console.log('Get Cookies: ', cookie.getItem('login'))
  // },[])

    return (
      <AccountLayout user={user}>

  <div className="az-content az-content-dashboard">
    <div className="container">
      <div className="az-content-body">
        <div className="az-dashboard-one-title">
          <div>
            <h2 className="az-dashboard-title">Hi {authUser.profile?.first_name}, welcome back!</h2>
            <p className="az-dashboard-text">Your web analytics dashboard template.</p>
          </div>

        </div>{/* az-dashboard-one-title */}

      </div>{/* az-content-body */}
    
       {/* Important contents end here */}
    
    </div>
  </div>{/* az-content */}

        </AccountLayout>
    )
}

Index.getInitialProps = async (ctx) => {
  const user = await checkAuthAndRedirect(`${process.env.API}/authorize`, ctx)
  return { user }
}

export default Index