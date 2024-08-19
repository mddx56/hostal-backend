import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { ZoneService } from './zone.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';

@Controller('zone')
@UseGuards(AuthGuard)
export class ZoneController {
  constructor(private readonly zoneService: ZoneService) { }

  @Post()
  async create(@Body() createZoneDto: CreateZoneDto) {
    try {
      await this.zoneService.create(
        createZoneDto,
      );

      return {
        success: true,
        message: 'Zone Created Successfully',
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
      const data =
        await this.zoneService.findAll();
      return {
        success: true,
        data,
        message: 'Zone Fetched Successfully',
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
      const data = await this.zoneService.findOne(
        +id,
      );
      return {
        success: true,
        data,
        message: 'Zone Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateZoneDto: UpdateZoneDto) {
    try {
      await this.zoneService.update(
        +id,
        updateZoneDto,
      );
      return {
        success: true,
        message: 'Zone Updated Successfully',
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
      await this.zoneService.remove(+id);
      return {
        success: true,
        message: 'Zone Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
