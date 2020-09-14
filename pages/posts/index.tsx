import {GetServerSideProps, NextPage} from 'next'
import {getDatabaseConnection} from 'lib/getDatabaseConnection'
import {Post} from 'src/entity/Post'
import Link from 'next/link'
import qs from 'querystring'
import {usePager} from 'hooks/usePager'

type Props = {
    posts: Post[]
    count: number
    perPage: number
    page: number
    totalPage: number
}
const PostsIndex: NextPage<Props> = (props) => {
    const {posts, count, page, totalPage} = props
    const {pager} = usePager({count, page, totalPage})

    return (
        <div>
            <h1>文章列表({props.count}) 每页{props.perPage}条</h1>
            {posts.map(post =>
                <div key={post.id}>
                    <Link href={'/posts/[id]'} as={`/posts/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </div>
            )}

            <footer>
                {pager}


            </footer>
        </div>
    )
}
export default PostsIndex

export const getServerSideProps: GetServerSideProps = async (context) => {
    const index = context.req.url.indexOf('?')
    const search = context.req.url.slice(index + 1)
    const query = index === -1 ? {'page': '1'} : qs.parse(search)

    const page = parseInt(query.page.toString())
    const perPage = 2

    const connection = await getDatabaseConnection()
    const [posts, count] = await connection.manager.findAndCount(Post, {skip: (page - 1) * perPage, take: perPage})

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
            count,
            perPage,
            page,
            totalPage: Math.ceil(count / perPage)
        }
    }
}
