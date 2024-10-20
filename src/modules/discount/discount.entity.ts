import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';
import { PropertyEntity } from '../property/property.entity';

@Entity('discount')
export class DiscountEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'boolean', default: true, nullable: true })
  state: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @CreateDateColumn()
  created?: Date;

  @UpdateDateColumn()
  updated?: Date;

  @Column()
  property_id: number;

  @OneToOne(() => PropertyEntity)
  @JoinColumn({ name: 'property_id' })
  property: Relation<PropertyEntity>;
}
