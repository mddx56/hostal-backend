import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';

@Entity('type_property')
export class TypePropertyEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    title: string = "";

    @Column('text', { nullable: true })
    description: string = "";

    @OneToMany(() => PropertyEntity, (property) => property.type)
    propertys: PropertyEntity[];
}
