import 'reflect-metadata'
import {createConnection} from 'typeorm/index'
import {Post} from './entity/Post'

createConnection().then(async connection => {
    const posts = await connection.manager.find(Post)
    console.log(posts)
    const p = new Post()
    p.title = 'Post 1'
    p.content = '我得第一篇文章'
    await connection.manager.save(p)
    const posts2 = await connection.manager.find(Post)
    console.log(posts2)
    await connection.close()
}).catch(error => console.log(error))
