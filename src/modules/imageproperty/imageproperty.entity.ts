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

    @ManyToOne(() => PropertyEntity, {
        eager: true,
    })

    @JoinColumn({ name: 'property_id' })
    property: PropertyEntity;

}
