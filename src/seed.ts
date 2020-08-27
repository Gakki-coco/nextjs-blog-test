import 'reflect-metadata'
import {createConnection} from 'typeorm'
import {User} from './entity/User'
import {Post} from './entity/Post'
import {Comment} from './entity/Comment'


createConnection().then(async connection => {
    const {manager} = connection

    // 创建 user
    const u1 = new User()
    u1.username = 'gakki'
    u1.passwordDigest = 'xxx'
    await manager.save(u1)

    // 创建 post
    const p1 = new Post()
    p1.title = 'Post'
    p1.content = 'MY FIRST POST'
    p1.author = u1
    await manager.save(p1)

    const c1 = new Comment()
    c1.user = u1
    c1.post = p1
    c1.content = 'Awesome!'
    await manager.save(c1)

    await connection.close()

    console.log('数据填充成功(๑•̀ㅂ•́)و✧')

}).catch(error => console.log(error))
