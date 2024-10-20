import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'stars no debe estar vacío' })
  @IsDecimal()
  readonly stars: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'comment no debe estar vacío' })
  readonly comment: string;
}
