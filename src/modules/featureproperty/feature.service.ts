import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { FeatureEntity } from './entities/feature.entity';

@Injectable()
export class FeatureService {

  constructor(
    @InjectRepository(FeatureEntity)
    private readonly featureRepository: Repository<FeatureEntity>,
  ) { }

  async create(createFeatureDto: CreateFeatureDto) {
    const featureData = await this.featureRepository.create(createFeatureDto);
    return this.featureRepository.save(featureData);
  }

  async findAll() {
    return await this.featureRepository.find();
  }

  async findOne(id: number): Promise<FeatureEntity> {
    const featureData =
      await this.featureRepository.findOneBy({ id });
    if (!featureData) {
      throw new HttpException(
        'Feature Not Found',
        404,
      );
    }
    return featureData;
  }

  async update(id: number, updateFeatureDto: UpdateFeatureDto) {
    const existingFeature = await this.findOne(id);
    const featureData = this.featureRepository.merge(
      existingFeature,
      updateFeatureDto,
    );
    return await this.featureRepository.save(
      featureData,
    );
  }

  async remove(id: number) {
    const existingFeature = await this.findOne(id);
    return await this.featureRepository.remove(
      existingFeature,
    );
  }
}
