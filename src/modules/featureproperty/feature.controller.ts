import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { FeatureService } from './feature.service';

@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Post()
  async create(@Body() createFeatureDto: CreateFeatureDto) {
    try {
      await this.featureService.create(createFeatureDto);

      return {
        success: true,
        message: 'Feature Created Successfully',
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
      const data = await this.featureService.findAll();
      return {
        success: true,
        data,
        message: 'Feature Fetched Successfully',
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
      const data = await this.featureService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Feature Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFeatureDto: UpdateFeatureDto) {
    try {
      await this.featureService.update(+id, updateFeatureDto);
      return {
        success: true,
        message: 'Feature Updated Successfully',
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
      await this.featureService.remove(+id);
      return {
        success: true,
        message: 'Feature Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
