import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { FavoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) { }

  @Post()
  async create(@Body() createFavoriteDto: CreateFavoriteDto) {
    try {
      await this.favoriteService.create(createFavoriteDto);

      return {
        success: true,
        message: 'Favorite Created Successfully',
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
      const data = await this.favoriteService.findAll();
      return {
        success: true,
        data,
        message: 'Favorite Fetched Successfully',
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
      const data = await this.favoriteService.findOne(+id);
      return {
        success: true,
        data,
        message: 'Favorite Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get('user/:id')
  async favorites(@Param('id') id: string) {
    try {
      const data = await this.favoriteService.favorites(+id);
      return {
        success: true,
        data,
        message: 'Favorites User Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    try {
      await this.favoriteService.update(+id, updateFavoriteDto);
      return {
        success: true,
        message: 'Favorite Updated Successfully',
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
      await this.favoriteService.remove(+id);
      return {
        success: true,
        message: 'Favorite Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
