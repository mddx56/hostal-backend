import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDiscountDto {

  @ApiProperty()
  @IsNotEmpty({ message: 'price no debe estar vacío' })
  @IsDecimal()
  readonly price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'start_date no debe estar vacío' })
  @IsDate()
  readonly start_date: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'start_date no debe estar vacío' })
  @IsDate()
  readonly end_date: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'property_id no debe estar vacío' })
  @IsNumber()
  property_id: number;
}
