import { PartialType } from '@nestjs/swagger';
import { CreateFeaturepropertyDto } from './create-featureproperty.dto';

export class UpdateFeaturepropertyDto extends PartialType(CreateFeaturepropertyDto) {}
