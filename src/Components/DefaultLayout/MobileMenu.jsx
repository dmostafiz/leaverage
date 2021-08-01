import React from 'react'
import Link from 'next/link';

export default function MobileMenu({classes}) {
return (
<div id="menu" className="p-0 modal fade" role="dialog" >
    <div className="modal-dialog modal-dialog-slideout">
        <div className="modal-content full">
            <div className="modal-header" data-dismiss="modal">
                <i className="icon-close" />
            </div>
            <div className="menu modal-body">
                <div className="row w-100">
                    <div className="items p-0 col-12 text-center">
                        {/* Append [navbar] */}

                        <ul className="navbar-nav items">

                            <li className="nav-item">
                                <Link href="/concepts" replace={true} shallow={true}>
                                <a className={`nav-link ${classes} text-gray-400`}>Concepts</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/projects" replace={true} shallow={true}>
                                <a className={`nav-link ${classes} text-gray-400`}>Projects</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/reviews" replace={true} shallow={true}>
                                <a className={`nav-link ${classes} text-gray-400`}>Reviews</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/articles" replace={true} shallow={true}>
                                <a className={`nav-link ${classes} text-gray-400`}>Articles</a>
                                </Link>
                            </li>

                        </ul>


     
                    </div>
                    <div className="contacts p-0 col-12 text-center">
                        {/* Append [navbar] */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}