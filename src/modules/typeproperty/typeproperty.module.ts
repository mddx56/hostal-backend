import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypepropertyController } from './typeproperty.controller';
import { TypePropertyEntity } from './typeproperty.entity';
import { TypepropertyService } from './typeproperty.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypePropertyEntity])],
  controllers: [TypepropertyController],
  providers: [TypepropertyService],
})
export class TypepropertyModule { }
