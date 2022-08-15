import React, { useEffect } from 'react'
import cookie from 'js-cookie'
import AuthLayout from '../Layouts/AuthLayout'
import { useRouter } from 'next/dist/client/router'


export default function sso() {

    // useEffect(async () => {

    //     loadScripts()

    //     const authCoockie = cookie.get('login')

    //     if (authCoockie) {
    //         const dcd = JSON.parse(authCoockie)
    //         const data = await getAuthUserByToken(`${process.env.API}/authorize`, dcd.token)

    //         dispatch(makeAuthentication(data))
    //     }

    // }, [])

    const router = useRouter()

    useEffect(async () => {

        const res = await fetch(`${process.env.API}/sso_token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json()

        console.log('Router: ', router)

        // if (data) {
        //     window.location.href = `http://localhost:3000/auth/sso?token=${data}?surl=${router.query.surl}`
        // }
    }, [])

    return (
        <AuthLayout title="Sign In">
            <div style={{
                height: '100vh',
                width: '100%',
            }}>
                <div style={{
                    padding: 'auto'
                }}>
                    <span>Authenticating...</span>
                </div>
            </div>
        </AuthLayout>
    )
}
