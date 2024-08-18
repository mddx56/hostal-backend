import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypepropertyController } from './typeproperty.controller';
import { TypePropertyEntity } from './typeproperty.entity';
import { TypePropertyService } from './typeproperty.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypePropertyEntity])],
  controllers: [TypepropertyController],
  providers: [TypePropertyService],
})
export class TypepropertyModule { }
