import { Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ZoneEntity } from '../zone/zone.entity';
import { TypePropertyEntity } from '../typeproperty/typeproperty.entity';
import { ImagepropertyEntity } from '../imageproperty/imageproperty.entity';

@Entity('property')
export class PropertyEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    price: number;

    @Column()
    rating: number;

    @Column()
    availableRooms: number;

    @Column({ type: "decimal", default: 0 })
    latitude: number;

    @Column({ type: "decimal", default: 0 })
    longitude: number;

    @CreateDateColumn()
    created?: Date;

    @UpdateDateColumn()
    updated?: Date;

    @ManyToOne(() => ZoneEntity, {
        eager: true,
    })
    @JoinColumn({ name: 'zone_id' })
    zone: ZoneEntity;

    @ManyToOne(() => TypePropertyEntity, {
        eager: true,
    })
    @JoinColumn({ name: 'type_id' })
    type: TypePropertyEntity;

    @OneToMany(() => ImagepropertyEntity, (image) => image.property)
    images: PropertyEntity[];

}
