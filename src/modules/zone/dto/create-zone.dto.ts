import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateZoneDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'name no debe estar vacío' })
  @Length(5, 170, { message: 'name debe tener entre 5 y 170 caracteres' })
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly description: string = '';
}
