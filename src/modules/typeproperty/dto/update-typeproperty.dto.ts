import { PartialType } from '@nestjs/swagger';
import { CreateTypepropertyDto } from './create-typeproperty.dto';

export class UpdateTypepropertyDto extends PartialType(CreateTypepropertyDto) {}
