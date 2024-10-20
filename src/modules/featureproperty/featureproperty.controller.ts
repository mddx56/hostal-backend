import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateFeaturepropertyDto } from './dto/create-featureproperty.dto';
import { UpdateFeaturepropertyDto } from './dto/update-featureproperty.dto';
import { FeaturePropertyService } from './featureproperty.service';

@Controller('featureproperty')
export class FeaturePropertyController {
  constructor(private readonly featurepropertyService: FeaturePropertyService) {}

  @Post()
  async create(@Body() createFeaturepropertyDto: CreateFeaturepropertyDto) {
    try {
      await this.featurepropertyService.create(createFeaturepropertyDto);

      return {
        success: true,
        message: 'Featureproperty Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.featurepropertyService.findAll();
      return {
        success: true,
        data,
        message: 'Featureproperty Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.featurepropertyService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Featureproperty Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFeaturepropertyDto: UpdateFeaturepropertyDto) {
    try {
      await this.featurepropertyService.update(+id, updateFeaturepropertyDto);
      return {
        success: true,
        message: 'Featureproperty Updated Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.featurepropertyService.remove(+id);
      return {
        success: true,
        message: 'Featureproperty Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
