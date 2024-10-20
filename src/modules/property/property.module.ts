import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyEntity } from './property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyEntity])],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
