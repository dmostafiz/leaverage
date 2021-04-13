import React, { useEffect } from 'react';
import Head from 'next/head'
import loadJs from 'loadjs'
const AuthLayout = ({children}) => {

    useEffect(() => {                           
        loadJs('/account/lib/jquery/jquery.min.js')
        loadJs('/account/lib/bootstrap/js/bootstrap.bundle.min.js')
        loadJs('/account/lib/ionicons/ionicons.js')
        loadJs('/account/js/azia.js')
    },[])
    return (
        <>
        <Head>
            <link href="/account/lib/fontawesome-free/css/all.min.css" rel="stylesheet" />
            <link href="/account/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
            <link href="/account/lib/typicons.font/typicons.css" rel="stylesheet" />
            <link href="/account/css/azia.css" rel="stylesheet" />

            <script src="/account/lib/jquery/jquery.min.js"></script>
        </Head>
        <body className="az-body">
            {children}
        </body>
        </>
    );
}

export default AuthLayout;
