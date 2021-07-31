import React,{useEffect} from 'react'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'

export default function Header({classes}) {
    const user = useSelector(state => state.auth)
    const router = useRouter()

    useEffect(async () =>{

    },[])


    return (

        <>


    <header id="header">
        <nav className=" navbar navbar-expand py-3">

            <div className="container">
                
            <div className="container header">
            <Link href="/">
            <a className={`navbar-brand ${classes}`}>
                <img id="site-logo" src="/webexe/logo2-white.png" alt=""/>
            </a>
            </Link>
            <div className="ml-auto" />
                <ul className="navbar-nav items">

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
                            <li className="nav-">
                                <a href="/manage" className="btn  custbtn ml-lg-auto primary-button">
                                    <img className="mr-1" src="/icons/white/user.svg" style={{ height:'18px', width:'18px' }} />
                                    
                                    {user.username}
                                </a>
                            </li>
                        }


                        {!user.isAuth && <>
                            <li className="nav-item">
                                <a href="/sign-in" className={`nav-link ${classes} `}>Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a href="/sign-up" className="bg-yellow-500 shadow-md rounded px-3 py-2 text-dark">
                                    Join Today
                                </a>
                            </li>
                        </>  }
                    </ul>
                </div> 


                <ul className="navbar-nav toggle">
                    <li className="nav-item">
                        <a href="#" className={`nav-link ${classes}`} data-toggle="modal" data-target="#menu">
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
