import React from 'react'

export default function Loading({height = 20, width = 20}) {
    return (
        // style={{ marginLeft:'auto', marginRight:'auto' }}
        <img src="/loading.gif" style={{ 
            height:height, 
            width:width,
            marginLeft:'auto', 
            marginRight:'auto' 
        }} /> 
       
    )
}
