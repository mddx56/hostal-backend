import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  async create(@Body() createRatingDto: CreateRatingDto) {
    try {
      await this.ratingService.create(createRatingDto);

      return {
        success: true,
        message: 'Rating Created Successfully',
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
      const data = await this.ratingService.findAll();
      return {
        success: true,
        data,
        message: 'Rating Fetched Successfully',
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
      const data = await this.ratingService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Rating Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    try {
      await this.ratingService.update(+id, updateRatingDto);
      return {
        success: true,
        message: 'Rating Updated Successfully',
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
      await this.ratingService.remove(+id);
      return {
        success: true,
        message: 'Rating Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
