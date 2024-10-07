import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureEntity } from './entities/feature.entity';
import { FeaturepropertyController } from './featureproperty.controller';
import { FeaturePropertyEntity } from './entities/featureproperty.entity';
import { FeaturepropertyService } from './featureproperty.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureEntity, FeaturePropertyEntity])],
  controllers: [FeaturepropertyController],
  providers: [FeaturepropertyService],
})
export class FeaturepropertyModule { }
