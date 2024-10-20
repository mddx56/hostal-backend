import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePositionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'id no debe estar vacío' })
  @IsNumber()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'latitude no debe estar vacío' })
  @IsDecimal()
  readonly latitude: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'longitude no debe estar vacío' })
  @IsDecimal()
  readonly longitude: number;
}
