import Link from 'next/link';
import React from 'react';

const NavRight = () => {
    return (
        <nav className="nav">
        <Link href="/cms/concepts">
            <a className="nav-link"><i className="far fa-save" />Concepts</a>
        </Link>
        <Link href="/cms/projects">
            <a className="nav-link"><i className="far fa-file-pdf" />Projects</a>
        </Link>
        <Link href="/cms/reviews">
            <a className="nav-link"><i className="far fa-envelope" />Reviews</a>
        </Link>

        {/* <div className="dropdown-menu tx-13" x-placement="top-start" >
            <Link href="/cms/concepts">
                <a className="dropdown-item">Concepts</a>
            </Link>
            <Link href="/cms/projects">
                <a className="dropdown-item">Projects</a>
            </Link>
            <Link href="/cms/reviews">
                <a className="dropdown-item">Reviews</a>
            </Link>
        </div>
        <a className="nav-link" href="#" data-toggle="dropdown">
            <i className="fas fa-ellipsis-h" />
        </a> */}
   
    </nav>
    );
}

export default NavRight;
