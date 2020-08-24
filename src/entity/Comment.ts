import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm/index'
import {User} from './User'
import {Post} from './Post'

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    content: string

    @Column('')
    authorID: number

    @CreateDateColumn('time')
    createdAt: Date

    @UpdateDateColumn('time')
    updatedAt: Date

    @ManyToOne(type => User, user => user.comments)
    user: User

    @ManyToOne(type => Post, post => post.comments)
    post: Post

    // constructor(attributes: Partial<Post>) {
    //     Object.assign(this, attributes)
    // }
}