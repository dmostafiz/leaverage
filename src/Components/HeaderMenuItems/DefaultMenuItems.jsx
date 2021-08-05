import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Cd, Ud } from '../../../helpers/DashboardUrl'
import { initBackdrop } from '../../../state/default/actions'
import Backdrope from '../Backdrope'

export default function DefaultMenuItems({user, classes}) {

    const dispatch = useDispatch()

    const handlBuyeServicesClick = () => {
        dispatch(initBackdrop(true))
    }

    return (
    <>
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
                <Link href="/articles">
                <a className={`nav-link ${classes}`}>Tech Articles</a>
                </Link>
            </li>
            
            <li className="nav-item">
                <Link href="/achievments">
                <a className={`nav-link ${classes}`}>Our Achievments</a>
                </Link>
            </li>


            {/* <li className="nav-item">
                <a href={`${Ud}`} className={`nav-link ${classes}`}>Become a freelancer</a>
            </li> */}

            {/* <li className="nav-item">
                <Link href={`/calculate-cost`}> 
                <a href="/calculate-cost" onClick={handlBuyeServicesClick} className={`nav-link ${classes}`}>Get Estimate Cost</a>
                </Link>
            </li> */}


        </ul>


        <div className="ml-auto">
            <ul className="navbar-nav items">

                {user.isAuth &&
                <li className="nav-item">

                    <div class="dropdown show">
                        <a class={`nav-link ${classes} dropdown-toggle`} href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>

                            {user.username}
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item text-dark" href="/manage">Dashboard</a>
                            <a class="dropdown-item text-dark" href="#">Sign Out</a>
                        </div>
                    </div>
                </li>
                }


            <li className="nav-item mr-2">
                <Link href={`/calculate-cost`}> 
                <a href="/calculate-cost" className="bg-green-500 shadow-md rounded px-3 py-1 text-light" >Build Your Budget</a>
                </Link>
            </li>



                {!user.isAuth && <>
                    {/* <li className="nav-item">
                        <a href="/sign-in" className={`nav-link ${classes}`}>Sign in</a>
                    </li> */}
                    <li className="nav-item">
                        <a href="/sign-in" className="bg-yellow-300 shadow-md rounded px-3 py-1 text-gray-800">
                            Sign In
                        </a>
                    </li>
                </> }
            </ul>
        </div>

    </>
    )
}