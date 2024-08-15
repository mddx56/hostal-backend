import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeaturepropertyService } from './featureproperty.service';
import { CreateFeaturepropertyDto } from './dto/create-featureproperty.dto';
import { UpdateFeaturepropertyDto } from './dto/update-featureproperty.dto';

@Controller('featureproperty')
export class FeaturepropertyController {
  constructor(private readonly featurepropertyService: FeaturepropertyService) {}

  @Post()
  create(@Body() createFeaturepropertyDto: CreateFeaturepropertyDto) {
    return this.featurepropertyService.create(createFeaturepropertyDto);
  }

  @Get()
  findAll() {
    return this.featurepropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featurepropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeaturepropertyDto: UpdateFeaturepropertyDto) {
    return this.featurepropertyService.update(+id, updateFeaturepropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featurepropertyService.remove(+id);
  }
}
