import React from 'react';
import Link from 'next/link';
import IsActive from '../../../../helpers/IsActive';

const NavLeft = () => {
    return (
        <nav className="nav">
            <Link href="/cms">
                <a className={`nav-link ${IsActive(['/cms'],'active')}`}>Dashboard</a>
            </Link>
            <Link href="/cms/posts">
                <a className={`nav-link ${IsActive(['/cms/posts'],'active')}`}>Posts</a>
            </Link>
            <Link href="/cms/categories">
                <a className={`nav-link ${IsActive(['/cms/categories'],'active')}`}>Categories</a>
            </Link>
            <Link href="/cms/pages">
                <a className={`nav-link ${IsActive(['/cms/pages'],'active')}`}>Pages</a>
            </Link>

            <Link href="/cms/sliders">
                <a className={`nav-link ${IsActive(['/cms/sliders'],'active')}`}>Sliders</a>
            </Link>

            {/* <div className="dropdown-menu tx-13" x-placement="top-start" >
                <Link href="/cms/posts">
                    <a className="dropdown-item">Posts</a>
                </Link>
                <Link href="/cms/pages">
                    <a className="dropdown-item">Pages</a>
                </Link>
                <Link href="/cms/categories">
                    <a className="dropdown-item">Categories</a>
                </Link>
            </div>
            <a className="nav-link" href="#" data-toggle="dropdown">
                More
        </a> */}
        </nav>
    );
}

export default NavLeft;
