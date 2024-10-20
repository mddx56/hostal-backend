import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypepropertyDto } from './dto/create-typeproperty.dto';
import { UpdateTypepropertyDto } from './dto/update-typeproperty.dto';
import { TypePropertyEntity } from './typeproperty.entity';

@Injectable()
export class TypePropertyService {
  constructor(
    @InjectRepository(TypePropertyEntity)
    private readonly typepropertyRepository: Repository<TypePropertyEntity>,
  ) {}

  async create(createTypePropertyDto: CreateTypepropertyDto) {
    const typepropertyData = await this.typepropertyRepository.create(createTypePropertyDto);
    return this.typepropertyRepository.save(typepropertyData);
  }

  async findAll() {
    return await this.typepropertyRepository.find();
  }

  async findOne(id: number): Promise<TypePropertyEntity> {
    const typepropertyData = await this.typepropertyRepository.findOneBy({ id });
    if (!typepropertyData) {
      throw new HttpException('TypeProperty Not Found', 404);
    }
    return typepropertyData;
  }

  async update(id: number, updateTypePropertyDto: UpdateTypepropertyDto) {
    const existingTypeProperty = await this.findOne(id);
    const typepropertyData = this.typepropertyRepository.merge(existingTypeProperty, updateTypePropertyDto);
    return await this.typepropertyRepository.save(typepropertyData);
  }

  async remove(id: number) {
    const existingTypeProperty = await this.findOne(id);
    return await this.typepropertyRepository.remove(existingTypeProperty);
  }
}
