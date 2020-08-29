import {NextApiHandler} from 'next'
import {withIronSession} from 'next-iron-session'

export default function withSession(handler: NextApiHandler) {
    return withIronSession(handler, {
        // password: process.env.SECRET_COOKIE_PASSWORD
        password: '11892878465950019118928784659500191189287846595001911892878465950019',
        cookieName: 'blog',
        cookieOptions: {
            secure: false
        }
    })
}