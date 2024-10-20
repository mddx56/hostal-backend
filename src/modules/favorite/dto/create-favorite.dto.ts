import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({ description: 'id de usuario' })
  @IsNotEmpty({ message: 'user_id no debe estar vacío' })
  @IsNumber()
  user_id: number;

  @ApiProperty({ description: 'Id de propidad' })
  @IsNotEmpty({ message: 'property_id no debe estar vacío' })
  @IsNumber()
  property_id: number;
}
