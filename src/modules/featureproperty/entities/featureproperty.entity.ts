import { PropertyEntity } from 'src/modules/property/property.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FeatureEntity } from './feature.entity';

@Entity('feature_property')
export class FeaturePropertyEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn()
    created?: Date;

    @Column()
    feature_id: number;

    @ManyToOne(() => FeatureEntity, (feat) => feat.featureproperties)
    @JoinColumn({ name: 'feature_id' })
    feature: FeatureEntity;

    @Column()
    property_id: number;

    @ManyToOne(() => PropertyEntity, (proper) => proper.featureproperties)
    @JoinColumn({ name: 'property_id' })
    property: PropertyEntity;
}
