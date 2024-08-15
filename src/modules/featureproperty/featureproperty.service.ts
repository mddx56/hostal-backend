import { Injectable } from '@nestjs/common';
import { CreateFeaturepropertyDto } from './dto/create-featureproperty.dto';
import { UpdateFeaturepropertyDto } from './dto/update-featureproperty.dto';

@Injectable()
export class FeaturepropertyService {
  create(createFeaturepropertyDto: CreateFeaturepropertyDto) {
    return 'This action adds a new featureproperty';
  }

  findAll() {
    return `This action returns all featureproperty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} featureproperty`;
  }

  update(id: number, updateFeaturepropertyDto: UpdateFeaturepropertyDto) {
    return `This action updates a #${id} featureproperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} featureproperty`;
  }
}
