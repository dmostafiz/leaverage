import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import DefaultLayout from '../Layouts/DefaultLayout'
import {makeAuthentication} from '../../state/auth/actions'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import Link from 'next/link'

export default function SignIn() {

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
           const response = await fetch(`http://localhost:3333/api/login`, {
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
            

            window.location.href = '/account'
            //  router.prefetch('/dashboard')
        }
        else
        {
          setLoading(false)
        }



    }


    return (
        <DefaultLayout>
        <div className="navbar-holder"></div>
 <section id="contact" className="section-7 form">
   <div className="container">
     <form  data-aos="fade-in" data-aos-delay='100' id="leverage-form">
       {/* <input type="hidden" name="section" defaultValue="leverage_form" /> */}
       {/* <input type="hidden" name="reCAPTCHA" /> */}
       {/* Remove this field if you want to disable recaptcha */}
       <div className="row">
         <div className="col-12 col-md-4 offset-md-4">

           <div className="row intro form-content">
             <div className="col-12 p-0">
               {/* Step Title */}
               <div className="step-title text-center">
                 <h2 className="alt">Login</h2>
                 <p>Login to your account with the secure credentialss</p>
               </div>
       
             </div>
           </div>
           {/* Steps Group */}
           <div className="row ">
             <div className="col-12 p-0">
  
               
                <div className="input-group">
                    <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Username / Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errorMail != '' ? <span className="text-danger">{errorMail}</span> : <></>}

                <div className="input-group p-0">
                    <input 
                    type="password"
                    name="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errorPass != ''? <span className="text-danger">{errorPass}</span> : <></>}
      
                {hasError != ''? <span className="text-danger">{hasError}</span> : <></>}

                <div className="input-group right pt-3" style={{ display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Link href="/registration">
                    <a>No account yet?</a>
                  </Link>
                  <button onClick={(e) => handleSubmit(e)} type="submit" className="btn primary-button">
                    SIGN IN

                    {loading ? <div className="spinner-border spinner-border-sm left ml-2" role="status">
                      <span className="sr-only">Loading...</span>
                    </div> : <i className="icon-arrow-right-circle left" />}
                    
                    </button>
                </div>

                <div className="input-group text-center pt-5" style={{ display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                  <a href="/registration" className="text-muted"># I have forgot my password #</a>
                </div>

             </div>
           </div>
         </div>

       </div>
     </form>
   </div>
 </section>
        </DefaultLayout>
    )
}
