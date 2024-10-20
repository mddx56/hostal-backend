import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FeaturePropertyEntity } from './featureproperty.entity';

@Entity('feature')
export class FeatureEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: 'default-icon' })
  icon: string;

  @OneToMany(() => FeaturePropertyEntity, (favorite) => favorite.feature)
  featureproperties: FeaturePropertyEntity[];
}
