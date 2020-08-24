import {MigrationInterface, QueryRunner} from 'typeorm/index'

export class RenameColumns1598250503300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'password_digest', 'passwordDigest')
        await queryRunner.renameColumn('posts', 'author_id', 'authorID')
        await queryRunner.renameColumn('comments', 'user_id', 'userID')
        await queryRunner.renameColumn('comments', 'post_id', 'postID')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'passwordDigest', 'password_digest')
        await queryRunner.renameColumn('posts', 'authorID', 'author_id')
        await queryRunner.renameColumn('comments', 'userID', 'user_id')
        await queryRunner.renameColumn('comments', 'postID', 'post_id')
    }

}
