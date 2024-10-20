import { PropertyEntity } from 'src/modules/property/property.entity';
import { UserEntity } from 'src/modules/user/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';
import { ResponseCommentEntity } from './reposnse.entity';

@Entity('comment')
export class CommentEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    content: string;

    @CreateDateColumn()
    craeted: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    user_id: number;

    @ManyToOne(() => UserEntity, (user) => user.comments)
    @JoinColumn({ name: 'user_id' })
    user: Relation<UserEntity>;

    @Column()
    property_id: number;

    @ManyToOne(() => PropertyEntity, (pr) => pr.comments)
    @JoinColumn({ name: 'property_id' })
    property: Relation<PropertyEntity>;

    @OneToMany(() => ResponseCommentEntity, (responsecom) => responsecom.comment)
    responses: ResponseCommentEntity[];
}
