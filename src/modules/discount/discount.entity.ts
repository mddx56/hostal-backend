import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('discount')
export class DiscountEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'boolean', default: true, nullable: true })
    state: boolean;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'date' })
    start_date: string;

    @Column({ type: 'date' })
    end_date: string;

}
