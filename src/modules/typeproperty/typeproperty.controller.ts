import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypePropertyService } from './typeproperty.service';
import { CreateTypepropertyDto } from './dto/create-typeproperty.dto';
import { UpdateTypepropertyDto } from './dto/update-typeproperty.dto';

@Controller('typeproperty')
export class TypepropertyController {
  constructor(private readonly typepropertyService: TypePropertyService) {}

  @Post()
  create(@Body() createTypepropertyDto: CreateTypepropertyDto) {
    return this.typepropertyService.create(createTypepropertyDto);
  }

  @Get()
  findAll() {
    return this.typepropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typepropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypepropertyDto: UpdateTypepropertyDto) {
    return this.typepropertyService.update(+id, updateTypepropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typepropertyService.remove(+id);
  }
}
