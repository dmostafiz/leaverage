import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import Logo from '../Logo'

export default function Header({logoType = 'dark', classes = "text-dark"}) {
    const user = useSelector(state => state.auth)
    const [currentRoute, setCurrentRoute] = useState('/')

    const router = useRouter()

    useEffect(async () =>{

          setCurrentRoute(router.pathname)

    },[router, currentRoute])

    
    return (

        <>

    <header id="header">
        <nav className="navbar navbar-expand py-3" style={{ background: currentRoute != '/' ? '#f5f5f5' : '' }}>

            <div className="container">
                
            <div className="container header">
            <Link href="/">
                <a className={`navbar-brand ${classes}`}>
                    <Logo type={logoType} classes="" />
                </a>
            </Link>
            <div className="ml-auto" />
                <ul className="navbar-nav items">

                    <li className="nav-item">
                        <Link href="/concepts">
                            <a className={`nav-link ${classes}`}>About Us</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/concepts">
                            <a className={`nav-link ${classes}`}>Concepts</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/projects">
                            <a className={`nav-link ${classes}`}>Projects</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/reviews">
                            <a className={`nav-link ${classes}`}>Reviews</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/articles">
                            <a className={`nav-link ${classes}`}>Articles</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/concepts">
                            <a className={`nav-link ${classes}`}>Buy services</a>
                        </Link>
                    </li>

                </ul>

                {/* <ul className="navbar-nav icons">
                    <li className="nav-item">
                        <a href="#" className={`nav-link ${classes}`}>}`} data-toggle="modal" data-target="#search">
                            <i className="icon-magnifier"></i>
                        </a>
                    </li>
                    <li className="nav-item social">
                        <a href="#" className={`nav-link ${classes}`}><i className="icon-social-twitter"></i></a>
                    </li>
                    <li className="nav-item social">
                        <a href="#" className={`nav-link ${classes}`}><i className="icon-social-instagram"></i></a>
                    </li>
                </ul> */}
                    
                <div className="ml-auto">
                    <ul className="navbar-nav items">
                        {user.isAuth && 
                            <li className="nav-item">
            

                                <div class="dropdown show">
                                    <a class={`nav-link ${classes} dropdown-toggle`} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                       
                                        {user.username}
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item text-dark" href="/sign-in">Dashboard</a>
                                        <a class="dropdown-item text-dark" href="#">Sign Out</a>
                                    </div>
                                </div>
                            </li>
                        }


                        {!user.isAuth && <>
                            <li className="nav-item">
                                <a href="/sign-in" className={`nav-link ${classes}`}>Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a href="/sign-up" className="bg-yellow-400 shadow-md rounded px-3 py-2 text-dark">
                                    Join Today
                                </a>
                            </li>
                        </>  }
                    </ul>
                </div> 


                <ul className="navbar-nav toggle">
                    <li className="nav-item">
                        <a href="#" id="menubarg" className={`nav-link ${classes}`} data-toggle="modal" data-target="#menu">
                            <i className="icon-menu m-0"></i>
                        </a>
                    </li>
                </ul>



            </div>


            </div> 
        </nav>

    </header>

        </>
 )
}
