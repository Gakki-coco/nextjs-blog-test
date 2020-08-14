import React from 'react'
import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <div>
                First Post 回到首页
                <Link href={"/"}><a>点击这里</a></Link>
            </div>
        </>
    )
}