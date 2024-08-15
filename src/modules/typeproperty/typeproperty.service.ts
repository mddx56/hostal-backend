import { Injectable } from '@nestjs/common';
import { CreateTypepropertyDto } from './dto/create-typeproperty.dto';
import { UpdateTypepropertyDto } from './dto/update-typeproperty.dto';

@Injectable()
export class TypepropertyService {
  create(createTypepropertyDto: CreateTypepropertyDto) {
    return 'This action adds a new typeproperty';
  }

  findAll() {
    return `This action returns all typeproperty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeproperty`;
  }

  update(id: number, updateTypepropertyDto: UpdateTypepropertyDto) {
    return `This action updates a #${id} typeproperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeproperty`;
  }
}
