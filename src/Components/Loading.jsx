import React from 'react'

export default function Loading({height = 20, width = 20, center= true}) {

    const style = center ? { 
        height:height, 
        width:width,
        marginLeft:'auto', 
        marginRight:'auto' 
    } : {
        height:height, 
        width:width,  
     }

    return (
        // style={{ marginLeft:'auto', marginRight:'auto' }}
        <img src="/loading.gif" style={style} /> 
       
    )
}
