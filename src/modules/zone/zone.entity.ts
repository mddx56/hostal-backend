import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';

@Entity('zone')
export class ZoneEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @OneToMany(() => PropertyEntity, (property) => property.zone)
    propertys: PropertyEntity[];
}
