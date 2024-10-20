import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UpdatePasswordDto, UpdateUserDto } from 'src/modules/user/dto/person.dto';
import * as bcrypt from 'bcrypt';
import { FavoriteService } from '../favorite/favorite.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const favoriteData = await this.userRepository.findOneBy({ id });
    if (!favoriteData) {
      throw new HttpException('User Not Found', 404);
    }
    return favoriteData;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findOne(id);
    const userData = this.userRepository.merge(existingUser, updateUserDto);
    return await this.userRepository.save(userData);
  }

  async recoverPassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuario no existe en la base de datos.');
    }

    const hashedPassword = await bcrypt.hash(updatePasswordDto.password, 10);

    await this.userRepository.update({ id }, { password: hashedPassword });

    const updatedUser = await this.userRepository.findOne({ where: { id } });

    return { message: 'Contraseña actualizada', user: updatedUser };
  }
}
