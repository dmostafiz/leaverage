import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import Logo from '../Logo'
import SiderDrawer from '../SiderDrawer'
import { Cd } from '../../../helpers/DashboardUrl'
import DefaultMenuItems from '../HeaderMenuItems/DefaultMenuItems'
import CustomerMenuItems from '../HeaderMenuItems/CustomerMenuItems'
import UserMenuItems from '../HeaderMenuItems/UserMenuItems'
import Backdrope from '../Backdrope'

export default function Header({logoType = 'dark', classes = "text-dark", nav = 'home'}) {
    const user = useSelector(state => state.auth)
    const [currentRoute, setCurrentRoute] = useState('/')

    const router = useRouter()

    const dispatch = useDispatch()

    useEffect(async () =>{

        console.log('MY Menu = ', nav);

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
                            <Logo type={logoType} classes="-mt-2" />
                        </a>
                    </Link>

                    <div className="ml-auto"/>

                     { nav == 'client' ? 
                     <CustomerMenuItems  classes={classes} user={user} /> :
                      nav == 'user' ? <UserMenuItems classes={classes} user={user} /> :
                       <DefaultMenuItems classes={classes} user={user} />  }
                </div>


                <ul className="navbar-nav toggle">
                    <li className="nav-item">
                        <SiderDrawer ancore="left" classess={classes}/>
                    </li>
                </ul>


            </div> 
        </nav>

    </header>

        </>
 )
}
