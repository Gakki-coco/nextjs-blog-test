import 'styles/globals.css'
import React from 'react'
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title> 我的博客 - Gakki</title>
                <meta name="viewport"
                      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
