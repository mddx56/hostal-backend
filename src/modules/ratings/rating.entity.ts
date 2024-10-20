import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
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
  user: Relation<UserEntity>;

  @Column()
  property_id: number;

  @ManyToOne(() => PropertyEntity, (proper) => proper.ratings)
  @JoinColumn({ name: 'property_id' })
  property: Relation<PropertyEntity>;

  @CreateDateColumn()
  craeted: Date;
}
