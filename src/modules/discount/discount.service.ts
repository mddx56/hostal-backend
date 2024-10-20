import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { DiscountEntity } from './discount.entity';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(DiscountEntity)
    private readonly discountRepository: Repository<DiscountEntity>,
  ) { }

  async create(createDiscountDto: CreateDiscountDto) {
    const discountData = await this.discountRepository.create(createDiscountDto);
    return this.discountRepository.save(discountData);
  }

  async findAll() {
    return await this.discountRepository.find({ relations: { property: true } });
  }

  async findOne(id: number): Promise<DiscountEntity> {
    const discountData = await this.discountRepository.findOneBy({ id });
    if (!discountData) {
      throw new HttpException('Discount Not Found', 404);
    }
    return discountData;
  }

  async update(id: number, updateDiscountDto: UpdateDiscountDto) {
    const existingDiscount = await this.findOne(id);
    const discountData = this.discountRepository.merge(existingDiscount, updateDiscountDto);
    return await this.discountRepository.save(discountData);
  }

  async remove(id: number) {
    const existingDiscount = await this.findOne(id);
    return await this.discountRepository.remove(existingDiscount);
  }
}
