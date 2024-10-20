import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyEntity } from './property.entity';
import { CreatePositionDto } from './dto/create-position.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(PropertyEntity)
    private readonly propertyRepository: Repository<PropertyEntity>,
  ) { }

  async create(createPropertyDto: CreatePropertyDto) {
    const propertyData = await this.propertyRepository.create(createPropertyDto);
    return this.propertyRepository.save(propertyData);
  }

  async createPosition(createPosDto: CreatePositionDto): Promise<PropertyEntity> {
    const { id, longitude, latitude } = createPosDto;
    if (!id) {
      throw new HttpException('Propertiy Not Found', 404);
    }
    await this.propertyRepository.update(id, { longitude: longitude, latitude: latitude });
    return this.findOne(id)
  }

  async findAll() {
    return await this.propertyRepository.find({ relations: ['zone', 'type'] });
  }

  async findPositions() {
    const propertyData = await this.propertyRepository.find({
      select: ['id', 'name', 'latitude', 'longitude'],
    });
    if (!propertyData) {
      throw new HttpException('Properties Not Found', 404);
    }
    return propertyData;
  }

  async findOne(id: number): Promise<PropertyEntity> {
    const propertyData = await this.propertyRepository.findOneBy({ id });
    if (!propertyData) {
      throw new HttpException('Property Not Found', 404);
    }
    return propertyData;
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const existingProperty = await this.findOne(id);
    const propertyData = this.propertyRepository.merge(existingProperty, updatePropertyDto);
    return await this.propertyRepository.save(propertyData);
  }

  async remove(id: number) {
    const existingProperty = await this.findOne(id);
    return await this.propertyRepository.remove(existingProperty);
  }
}
