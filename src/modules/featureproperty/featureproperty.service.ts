import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeaturepropertyDto } from './dto/create-featureproperty.dto';
import { UpdateFeaturepropertyDto } from './dto/update-featureproperty.dto';
import { FeaturePropertyEntity } from './entities/featureproperty.entity';

@Injectable()
export class FeaturePropertyService {

    constructor(
        @InjectRepository(FeaturePropertyEntity)
        private readonly featurepropertyRepository: Repository<FeaturePropertyEntity>,
    ) { }

    async create(createFeaturepropertyDto: CreateFeaturepropertyDto) {
        const featurepropertyData = await this.featurepropertyRepository.create(createFeaturepropertyDto);
        return this.featurepropertyRepository.save(featurepropertyData);
    }

    async findAll() {
        return await this.featurepropertyRepository.find();
    }

    async findOne(id: number): Promise<FeaturePropertyEntity> {
        const featurepropertyData =
            await this.featurepropertyRepository.findOneBy({ id });
        if (!featurepropertyData) {
            throw new HttpException(
                'Featureproperty Not Found',
                404,
            );
        }
        return featurepropertyData;
    }

    async update(id: number, updateFeaturepropertyDto: UpdateFeaturepropertyDto) {
        const existingFeatureproperty = await this.findOne(id);
        const featurepropertyData = this.featurepropertyRepository.merge(
            existingFeatureproperty,
            updateFeaturepropertyDto,
        );
        return await this.featurepropertyRepository.save(
            featurepropertyData,
        );
    }

    async remove(id: number) {
        const existingFeatureproperty = await this.findOne(id);
        return await this.featurepropertyRepository.remove(
            existingFeatureproperty,
        );
    }
}
