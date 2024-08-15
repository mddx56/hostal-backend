import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feature_property')
export class FeaturePropertyEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    icon: string;

}
