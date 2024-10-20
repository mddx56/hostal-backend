import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyService } from './property.service';
import { CreatePositionDto } from './dto/create-position.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    try {
      await this.propertyService.create(createPropertyDto);

      return {
        success: true,
        message: 'Property Created Successfully',
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
      const data = await this.propertyService.findAll();
      return {
        success: true,
        data,
        message: 'Property Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    try {
      const data = await this.propertyService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Property Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get('position/all')
  async getPositions() {
    try {
      const data = await this.propertyService.findPositions();
      return {
        success: true,
        data,
        message: 'Property positions Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Post('position/new')
  async createPosition(@Body() createPosDto: CreatePositionDto) {
    try {
      const data = await this.propertyService.createPosition(createPosDto);
      return {
        success: true,
        data,
        message: 'Position Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    try {
      await this.propertyService.update(+id, updatePropertyDto);
      return {
        success: true,
        message: 'Property Updated Successfully',
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
      await this.propertyService.remove(+id);
      return {
        success: true,
        message: 'Property Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
