import React from 'react'

export default function Logo({type = 'white', width, classes}) {

    let logo = "/webexe/logo.svg"


    return (
        <img className={`${classes}`} width={width} id="site-logo" src={logo} alt="Webexe logo"/>
    )
}
