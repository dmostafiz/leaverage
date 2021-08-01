import React from 'react'

export default function Logo({type = 'white', width, classes}) {

    let logo = "/webexe/white.png"

    if(type == 'white'){
         logo = "/webexe/white.png"
    }
    else if(type == 'dark'){
        logo = "/webexe/dark.png"
    }
    else if(type == 'green'){
        logo = "/webexe/green.png"
    }
    else if(type == 'green-dark'){
        logo = "/webexe/green-dark.png"
    }

    else if(type == 'green-light'){
        logo = "/webexe/green-light.png"
    }

    else if(type == 'yellow-dark'){
        logo = "/webexe/yellow-dark.png"
    }

    else if(type == 'yellow-light'){
        logo = "/webexe/yellow-light.png"
    }

    else{
        logo = "/webexe/white.png"
    }

    return (
        <img className={`${classes}`} width={width} id="site-logo" src={logo} alt="Webexe logo"/>
    )
}
