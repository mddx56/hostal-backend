import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateTypepropertyDto } from './dto/create-typeproperty.dto';
import { UpdateTypepropertyDto } from './dto/update-typeproperty.dto';
import { TypePropertyService } from './typeproperty.service';

@Controller('typeproperty')
export class TypepropertyController {
  constructor(private readonly typepropertyService: TypePropertyService) {}

  @Post()
  async create(@Body() createTypepropertyDto: CreateTypepropertyDto) {
    try {
      await this.typepropertyService.create(createTypepropertyDto);

      return {
        success: true,
        message: 'Typeproperty Created Successfully',
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
      const data = await this.typepropertyService.findAll();
      return {
        success: true,
        data,
        message: 'Typeproperty Fetched Successfully',
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
      const data = await this.typepropertyService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Typeproperty Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTypepropertyDto: UpdateTypepropertyDto) {
    try {
      await this.typepropertyService.update(+id, updateTypepropertyDto);
      return {
        success: true,
        message: 'Typeproperty Updated Successfully',
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
      await this.typepropertyService.remove(+id);
      return {
        success: true,
        message: 'Typeproperty Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
