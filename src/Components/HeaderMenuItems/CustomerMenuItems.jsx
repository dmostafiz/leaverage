import Link from 'next/link'
import React from 'react'
import { Cd, Ud } from '../../../helpers/DashboardUrl'

export default function CustomerMenuItems({user, classes}) {
return (
<>

<ul className="navbar-nav items">

    <li className="nav-item">
        <Link href="/concepts">
        <a className={`nav-link ${classes}`}>Explore Webexe</a>
        </Link>
    </li>

    <li className="nav-item">
        <Link href="/projects">
        <a className={`nav-link ${classes}`}>My Projects</a>
        </Link>
    </li>
    <li className="nav-item">
        <Link href="/reviews">
        <a className={`nav-link ${classes}`}>Queued Projects</a>
        </Link>
    </li>

    <li className="nav-item">
        <Link href="/articles">
        <a className={`nav-link ${classes}`}>Statistics</a>
        </Link>
    </li>

    <li className="nav-item">
        <Link href="/concepts">
        <a className={`nav-link ${classes}`}>Messages</a>
        </Link>
    </li>
</ul>

    <div className="ml-auto">
        <ul className="navbar-nav items">
            {/* {user.isAuth && */}
            <li className="nav-item">

                <div class="dropdown show">
                    <a class={`nav-link ${classes} dropdown-toggle`} href="#" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Mostafiz
                        {/* {user.username} */}
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item text-dark" href={`${Ud}`} >Switch to Freelancer Account</a>
                        <a class="dropdown-item text-dark" href="/sign-in">My Prfile</a>
                        <a class="dropdown-item text-dark" href="/sign-in">Account Settings</a>
                        <a class="dropdown-item text-dark" href="/sign-in">Wallet Settings</a>
                        <a class="dropdown-item text-dark" href="#">Sign Out</a>
                    </div>
                </div>
            </li>
            {/* } */}

        
        </ul>
    </div>

</>
)
}