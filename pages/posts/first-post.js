import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
            {/*<Head>*/}
            {/*    <title>我的文章</title>*/}
            {/*</Head>*/}
            <div>
                First Post 回到首页
                <Link href={"/"}><a>点击这里</a></Link>
            </div>
        </>
    )
}