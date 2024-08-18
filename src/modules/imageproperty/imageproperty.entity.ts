import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';

@Entity('image_property')
export class ImagepropertyEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    url: string;

    @Column()
    base64: string;

    @Column()
    property_id: number;

    @ManyToOne(() => PropertyEntity, (property) => property.images)
    @JoinColumn({ name: 'property_id' })
    property: PropertyEntity;

}
