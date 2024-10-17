import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';
import { UserEntity } from '../user/user.entity';


@Entity('rating')
export class RatingEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'smallint' })
    stars: number;

    @Column({ type: 'text' })
    comment: string;

    @Column()
    user_id: number;

    @ManyToOne(() => UserEntity, (user) => user.ratings)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @Column()
    property_id: number;

    @ManyToOne(() => PropertyEntity, (proper) => proper.ratings)
    @JoinColumn({ name: 'property_id' })
    property: PropertyEntity;

    @CreateDateColumn()
    craeted: Date;
}
