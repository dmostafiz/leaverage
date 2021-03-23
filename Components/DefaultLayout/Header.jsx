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
    <header id="header">
        <nav className="dark navbar navbar-expand">

            <div className="container">
                
            <div className="container header">
            <Link href="/">
            <a className={`navbar-brand ${classes}`}>
                <i className="text-success">DMostafiz</i>
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

                    {!user.isAuth &&
                    <li className="nav-item">
                        <a href="/sign-in" className={`nav-link ${classes}`}>Sign in</a>
                    </li>
                    }

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
            </div>


            <ul className="navbar-nav toggle">
                <li className="nav-item">
                    <a href="#" className={`nav-link ${classes}`} data-toggle="modal" data-target="#menu">
                        <i className="icon-menu m-0"></i>
                    </a>
                </li>
            </ul>

            <ul className="navbar-nav action">
            {!user.isAuth && 
                <li className="nav-item">
                    <a href="/sign-up" className="nav-link text-success">

                        
                        Signup
                    </a>
                </li>
                }
                

            {user.isAuth && 
                <li className="nav-">
                    <a href="/account" className="btn custbtn ml-lg-auto primary-button">
                        {user.username}
                    </a>
                </li>
                }
            </ul>
    
                
            </div>    

        </nav>
    </header>
    )
}
