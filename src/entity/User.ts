import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm/index'
import {Post} from './Post'
import {Comment} from './Comment'

@Entity('users')

export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    username: string

    @Column('varchar')
    passwordDigest: string

    @CreateDateColumn('time')
    createdAt: Date

    @UpdateDateColumn('time')
    updatedAt: Date

    @OneToMany(type => Post, post => post.author)
    posts: Post[]

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[]
}