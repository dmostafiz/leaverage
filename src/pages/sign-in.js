import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {makeAuthentication} from '../../state/auth/actions'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import Link from 'next/link'
import AuthLayout from '../Layouts/AuthLayout';
import Logo from '../Components/Logo'
// import fetch from 'isomorphic-fetch'

const Signin = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("12345678")
    const [loading, setLoading] = useState(false)
    const [errorMail, setErrorMail] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const [hasError, setHasError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        if(!email) {
          setErrorMail('Username/Email should not be empty')
        }else{
          setErrorMail('')
        } 
        if(!password){
          setErrorPass('Password should not be empty')
        }else{
          setErrorPass('') 
        }

        if(password && email != '')
        {
           const response = await fetch(`${process.env.API}/login`, {
             method: 'POST',
             headers: {
              "Content-Type": "application/json"
             },
             body: JSON.stringify({username:email, password})
           }) 

           const data = await response.json()
          //  console.log("Response Data: ",data.user)
           
           if(data.status == 'error')
           {
             console.log(data)

             setLoading(false)

             return setHasError(data.msg)

           }
           else{

            setLoading(false)

            setHasError("")
           }
           
           Cookies.set('login', {
                isAuth : true,
                token: data.token, 
              },
              {
                expires:7,
                path: '/'
              }
              )   
      
            dispatch(makeAuthentication(data.user)) 
    
            setLoading(false)

            return window.location.href = '/manage'
            //  router.prefetch('/dashboard')
        }
        else
        {
          setLoading(false)
        }

    }

    return (
      <AuthLayout title="Sign In">
        <div className="w-96 mx-auto mt-14 border p-5">
            <a href="/">
              <Logo type="dark" width="170"/>
            </a>
            <div className="py-5">
              <h className="text-xl font-bold text-green-600">Welcome back!</h>
              <h4 className="mb-3">Please sign in to continue</h4>
              <form >
                <div className="form-group">
                <label>Email</label>
                <input 
                    type="text" 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Username / Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorMail != '' ? <span className="text-danger">{errorMail}</span> : <></>}
                </div>{/* form-group */}
                <div className="form-group">
                <label>Password</label>
                <input 
                    type="password"
                    name="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorPass != ''? <span className="text-danger">{errorPass}</span> : <></>}
                {hasError != ''? <span className="text-danger">{hasError}</span> : <></>}

                </div>{/* form-group */}
                <button  onClick={(e) => handleSubmit(e)} className="btn btn-az-primary btn-block">
                    Sign In {loading ? <div className="spinner-border spinner-border-sm left ml-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div> : <i className="icon-arrow-right-circle left" />}
                </button>
            </form>
            </div>{/* az-signin-header */}
            <div className="az-signin-footer pt-2">
              <p><a href="#">Forgot password?</a></p>
              <p>
                  Don't have an account?  
                  <Link href="/sign-up"><a> Create an Account</a></Link>
              </p>
            </div>{/* az-signin-footer */}
        </div>{/* az-card-signin */}
     
      </AuthLayout>
    )
}

export default Signin;
