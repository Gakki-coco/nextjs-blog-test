import {GetServerSideProps, NextPage} from 'next'
import {UAParser} from 'ua-parser-js'
import {useEffect, useState} from 'react'
import {getDatabaseConnection} from 'lib/getDatabaseConnection'
import {Post} from 'src/entity/Post'


type Props = {
    browser: {
        name: string
        version: string
        major: string
    }
}
const Index: NextPage<Props> = (props) => {
    const {browser} = props
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const w = document.documentElement.clientWidth
        setWidth(w)
    })
    return (
        <div>
            <p>我是服务端渲染的</p>
            <h1>你的浏览器是 {browser.name}</h1>
            <p>我是客户端渲染的</p>
            <h1>你的浏览器窗口大小是 {width} 像素</h1>
        </div>
    )
}
export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
    const connection = await getDatabaseConnection()
    const posts = await connection.manager.find(Post)
    console.log(posts)
    const ua = context.req.headers['user-agent']
    const result = new UAParser(ua).getResult()
    return {
        props: {
            browser: result.browser
        }
    }
}
