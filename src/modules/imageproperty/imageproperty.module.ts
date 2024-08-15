import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagepropertyController } from './imageproperty.controller';
import { ImagepropertyEntity } from './imageproperty.entity';
import { ImagepropertyService } from './imageproperty.service';

@Module({
  imports: [TypeOrmModule.forFeature([ImagepropertyEntity])],
  controllers: [ImagepropertyController],
  providers: [ImagepropertyService],
})
export class ImagepropertyModule { }
