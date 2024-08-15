import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturepropertyController } from './featureproperty.controller';
import { FeaturePropertyEntity } from './featureproperty.entity';
import { FeaturepropertyService } from './featureproperty.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturePropertyEntity])],
  controllers: [FeaturepropertyController],
  providers: [FeaturepropertyService],
})
export class FeaturepropertyModule { }
