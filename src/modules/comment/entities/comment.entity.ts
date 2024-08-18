import { UserEntity } from 'src/modules/user/user.entity';
import { Column, CreateDateColumn, OneToMany, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ResponseCommentEntity } from './reposnse.entiry';
import { PropertyEntity } from 'src/modules/property/property.entity';

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
    user: UserEntity;

    @Column()
    property_id: number;

    @ManyToOne(() => PropertyEntity, (pr) => pr.comments)
    @JoinColumn({ name: 'property_id' })
    property: PropertyEntity;

    @OneToMany(() => ResponseCommentEntity, (responsecom) => responsecom.comment)
    responses: ResponseCommentEntity[];
}