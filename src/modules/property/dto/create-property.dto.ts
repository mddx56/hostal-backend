import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsString, Length, MaxLength } from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'name no debe estar vacío' })
  @Length(6, 150, { message: 'name debe tener entre 6 y 150 caracteres' })
  readonly name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(500, { message: 'description debe tener maximo 500 caracteres' })
  readonly description: string = '';

  @ApiProperty()
  @IsString()
  readonly location: string;

  @ApiProperty()
  @IsDecimal()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  readonly rating: number = 1;

  @ApiProperty()
  @IsNumber()
  readonly availableRooms: number = 0;

  @ApiProperty()
  readonly latitude: number = 0;

  @ApiProperty()
  readonly longitude: number = 0;

  @ApiProperty()
  @IsNotEmpty({ message: 'al parecer no has ingresado dato en este campo zona id' })
  @IsNumber()
  readonly zone_id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'al parecer no has ingresado dato en este campo tipo id' })
  @IsNumber()
  readonly type_id: number;
}
