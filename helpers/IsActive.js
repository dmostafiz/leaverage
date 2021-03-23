import React from 'react';
import { useRouter } from 'next/router'

const IsActive = (routers, className) => {
    const {asPath} = useRouter()

    return routers.indexOf(asPath) !== -1 ? className : ''
}

export default IsActive;
