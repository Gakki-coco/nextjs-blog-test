import * as next from 'next'
import {Session} from 'next-iron-session'

declare module '*.jpg' {
    const value: string
    export default value
}

type Post = {
    id: string;
    date: string;
    title: string;
    content: string;
    htmlContent: string;
}

declare module 'next' {
    interface NextApiRequest {
        session: Session
    }
}