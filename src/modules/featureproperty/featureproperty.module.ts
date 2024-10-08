import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureEntity } from './entities/feature.entity';
import { FeatureController } from './feature.controller';
import { FeaturePropertyEntity } from './entities/featureproperty.entity';
import { FeatureService } from './feature.service';
import { FeaturePropertyController } from './featureproperty.controller';
import { FeaturePropertyService } from './featureproperty.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureEntity, FeaturePropertyEntity])],
  controllers: [FeatureController, FeaturePropertyController],
  providers: [FeatureService, FeaturePropertyService],
})
export class FeaturepropertyModule { }
