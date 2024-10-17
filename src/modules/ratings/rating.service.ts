import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { RatingEntity } from './rating.entity';

@Injectable()
export class RatingService {

    constructor(
        @InjectRepository(RatingEntity)
        private readonly ratingRepository: Repository<RatingEntity>,
    ) { }

    async create(createRatingDto: CreateRatingDto) {
        const ratingData = await this.ratingRepository.create(createRatingDto);
        return this.ratingRepository.save(ratingData);
    }

    async findAll() {
        return await this.ratingRepository.find();
    }

    async findOne(id: number): Promise<RatingEntity> {
        const ratingData =
            await this.ratingRepository.findOneBy({ id });
        if (!ratingData) {
            throw new HttpException(
                'Rating Not Found',
                404,
            );
        }
        return ratingData;
    }

    async update(id: number, updateRatingDto: UpdateRatingDto) {
        const existingRating = await this.findOne(id);
        const ratingData = this.ratingRepository.merge(
            existingRating,
            updateRatingDto,
        );
        return await this.ratingRepository.save(
            ratingData,
        );
    }

    async remove(id: number) {
        const existingRating = await this.findOne(id);
        return await this.ratingRepository.remove(
            existingRating,
        );
    }
}
