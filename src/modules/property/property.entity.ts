import { Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ZoneEntity } from '../zone/zone.entity';
import { TypePropertyEntity } from '../typeproperty/typeproperty.entity';
import { ImagepropertyEntity } from '../imageproperty/imageproperty.entity';
import { CommentEntity } from '../comment/entities/comment.entity';
import { FavoriteEntity } from '../favorite/favorite.entity';
import { FeaturePropertyEntity } from '../featureproperty/entities/featureproperty.entity';
import { RatingEntity } from '../ratings/rating.entity';

@Entity('property')
export class PropertyEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    name: string;

    @Column('text', { nullable: true })
    description: string;

    @Column({ default: "" })
    location: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    price: number;


    @Column({ default: 1 })
    views: number;

    @Column({ default: 1 })
    rating: number;

    @Column({ name: "available_rooms", default: 0 })
    availableRooms: number;

    @Column({ type: "decimal", default: 0 })
    latitude: number;

    @Column({ type: "decimal", default: 0 })
    longitude: number;

    @CreateDateColumn()
    created?: Date;

    @UpdateDateColumn()
    updated?: Date;

    @Column()
    zone_id: number;

    @ManyToOne(() => ZoneEntity, (zone) => zone.propertys)
    @JoinColumn({ name: 'zone_id' })
    zone: ZoneEntity;

    @Column()
    type_id: number;

    @ManyToOne(() => TypePropertyEntity, (tp) => tp.propertys)
    @JoinColumn({ name: 'type_id' })
    type: TypePropertyEntity;

    @OneToMany(() => ImagepropertyEntity, (image) => image.property)
    images: PropertyEntity[];

    @OneToMany(() => CommentEntity, (comment) => comment.property)
    comments: CommentEntity[];

    @OneToMany(() => FavoriteEntity, (favorite) => favorite.property)
    favorites: FavoriteEntity[];

    @OneToMany(() => RatingEntity, (rating) => rating.property)
    ratings: FavoriteEntity[];

    @OneToMany(() => FeaturePropertyEntity, (favorite) => favorite.property)
    featureproperties: FeaturePropertyEntity[];

}
