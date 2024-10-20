import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFeaturepropertyDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'feature_id no debe estar vacío' })
  @IsNumber()
  feature_id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'property_id no debe estar vacío' })
  @IsNumber()
  property_id: number;
}
