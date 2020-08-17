import {NextPage} from 'next'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

type Post = {
    id: string;
    date: string;
    title: string;
}

const PostsIndex: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('/api/v1/posts').then(response => {
            setPosts(response.data)
            setIsLoading(false)
            if (response.data.length === 0) {
                setIsEmpty(true)
            }
        }, () => {
            setIsLoading(false)
        })
    }, [])
    return (
        <div>
            <h1>文章列表</h1>
            {isLoading ? <div>加载中</div> :
                isEmpty ? <div>没有文章</div> :
                    posts.map(p =>
                        <div key={p.id}>{p.id}</div>
                    )
            }
        </div>
    )
}

export default PostsIndex