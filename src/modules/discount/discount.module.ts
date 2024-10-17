import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountController } from './discount.controller';
import { DiscountEntity } from './discount.entity';
import { DiscountService } from './discount.service';

@Module({
    imports: [TypeOrmModule.forFeature([DiscountEntity])],
    controllers: [DiscountController],
    providers: [DiscountService],
})
export class DiscountModule { }
