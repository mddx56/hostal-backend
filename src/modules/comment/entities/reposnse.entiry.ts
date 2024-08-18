import { UserEntity } from 'src/modules/user/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CommentEntity } from './comment.entity';

@Entity('comment_response')
export class ResponseCommentEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    content: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    user_id: number;

    @ManyToOne(() => UserEntity, (user) => user.comments)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @Column()
    comment_id: number;

    @ManyToOne(() => CommentEntity, (comment) => comment.responses)
    @JoinColumn({ name: 'comment_id' })
    comment: CommentEntity;

}