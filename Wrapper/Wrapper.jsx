import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DefaultLayout from '../Layouts/DefaultLayout'
import loadJs from 'loadjs'
import AccountLayout from '../Layouts/AccountLayout';
import { useRouter } from 'next/router'
import {makeAuthentication} from '../state/auth/actions'
import nookies from 'nookies'

function Wrapper({children}) {


    const router = useRouter()

    const auth = nookies.get()

    let user = {
        isAuth: false
    }

    if(auth.login){
        user = JSON.parse(auth.login)
    }
  
    useEffect(() =>{
        user.isAuth ? router.push('/account') : router.push('/sign-in')
    },[])

    console.log("User Props Auth: ", user)
    
    return (

       <>
        {!user.isAuth ? <DefaultLayout>
                        {children}  
                    </DefaultLayout> 
                    : 
                    <AccountLayout>
                        {children}  
                    </AccountLayout>  }
       </>
    )
}

export default Wrapper