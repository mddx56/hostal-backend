import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { ZoneEntity } from './zone.entity';

@Injectable()
export class ZoneService {

  constructor(
    @InjectRepository(ZoneEntity)
    private readonly zoneRepository: Repository<ZoneEntity>,
  ) { }

  async create(createZoneDto: CreateZoneDto) {
    const zoneData = await this.zoneRepository.create(createZoneDto);
    return this.zoneRepository.save(zoneData);
  }

  async findAll() {
    return await this.zoneRepository.find();
  }

  async findOne(id: number): Promise<ZoneEntity> {
    const zoneData =
      await this.zoneRepository.findOneBy({ id });
    if (!zoneData) {
      throw new HttpException(
        'Zone Not Found',
        404,
      );
    }
    return zoneData;
  }

  async update(id: number, updateZoneDto: UpdateZoneDto) {
    const existingZone = await this.findOne(id);
    const zoneData = this.zoneRepository.merge(
      existingZone,
      updateZoneDto,
    );
    return await this.zoneRepository.save(
      zoneData,
    );
  }

  async remove(id: number) {
    const existingZone = await this.findOne(id);
    return await this.zoneRepository.remove(
      existingZone,
    );
  }
}
