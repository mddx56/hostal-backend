import { PartialType } from '@nestjs/swagger';
import { CreateRatingDto } from './create-rating.dto';
export class UpdateRatingDto extends PartialType(CreateRatingDto) {}
