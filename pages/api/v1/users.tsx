import {NextApiHandler} from 'next'
import {getDatabaseConnection} from 'lib/getDatabaseConnection'
import {User} from 'src/entity/User'

const Users: NextApiHandler = async (req, res) => {
    const {username, password, passwordConfirmation} = req.body
    const connection = await getDatabaseConnection()
    const user = new User()
    user.username = username
    if (password !== passwordConfirmation) {
        const errors = {passwordConfirmation: ['密码不匹配']}
        res.statusCode = 422
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(errors))
        res.end()
    }
}

export default Users