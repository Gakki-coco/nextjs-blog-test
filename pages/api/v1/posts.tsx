import {NextApiHandler} from 'next'
import {Post} from 'src/entity/Post'
import {getDatabaseConnection} from 'lib/getDatabaseConnection'
import withSession from 'lib/withSession'

const Posts: NextApiHandler = withSession(async (req, res) => {
    if (req.method === 'POST') {
        const {title, content} = req.body
        const post = new Post()
        post.title = title
        post.content = content
        const connection = await getDatabaseConnection()
        const user = req.session.get('currentUser')
        if (!user) {
            res.statusCode = 401
            res.end()
            return
        }
        console.log(user)
        post.author = user.id
        await connection.manager.save(post)
        res.json(post)
    }
})

export default Posts