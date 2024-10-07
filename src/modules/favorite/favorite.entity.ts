import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';
import { UserEntity } from '../user/user.entity';

@Entity('favorite')
export class FavoriteEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn()
    created?: Date;

    @Column()
    user_id: number;

    @ManyToOne(() => UserEntity, (user) => user.favorites)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @Column()
    property_id: number;

    @ManyToOne(() => PropertyEntity, (proper) => proper.favorites)
    @JoinColumn({ name: 'property_id' })
    property: PropertyEntity;

}
