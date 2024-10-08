import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { FavoriteEntity } from './favorite.entity';

@Injectable()
export class FavoriteService {

  constructor(
    @InjectRepository(FavoriteEntity)
    private readonly favoriteRepository: Repository<FavoriteEntity>,
  ) { }

  async create(createFavoriteDto: CreateFavoriteDto) {
    const favoriteData = await this.favoriteRepository.create(createFavoriteDto);
    return this.favoriteRepository.save(favoriteData);
  }

  async findAll() {
    return await this.favoriteRepository.find();
  }

  async findOne(id: number): Promise<FavoriteEntity> {
    const favoriteData =
      await this.favoriteRepository.findOneBy({ id });
    if (!favoriteData) {
      throw new HttpException(
        'Favorite Not Found',
        404,
      );
    }
    return favoriteData;
  }

  async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    const existingFavorite = await this.findOne(id);
    const favoriteData = this.favoriteRepository.merge(
      existingFavorite,
      updateFavoriteDto,
    );
    return await this.favoriteRepository.save(
      favoriteData,
    );
  }

  async remove(id: number) {
    const existingFavorite = await this.findOne(id);
    return await this.favoriteRepository.remove(
      existingFavorite,
    );
  }
}
