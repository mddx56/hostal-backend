import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingController } from './rating.controller';
import { RatingEntity } from './rating.entity';
import { RatingService } from './rating.service';

@Module({
    imports: [TypeOrmModule.forFeature([RatingEntity])],
    controllers: [RatingController],
    providers: [RatingService],
})
export class RatingModule { }
