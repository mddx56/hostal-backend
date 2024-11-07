import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'name no debe estar vacío' })
  @Length(6, 150, { message: 'name debe tener entre 6 y 150 caracteres' })
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'description debe tener maximo 500 caracteres' })
  readonly description: string = '';

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly location: string;

  @ApiProperty()
  @IsOptional()
  @IsDecimal()
  readonly price: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly rating: number = 1;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly availableRooms: number = 0;

  @ApiProperty({
    description: 'geoson',
    example: `{'coordinates': [-63.15976305067191,-17.817439661791127],'type':'Point'}`
  })
  @IsObject()
  position: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'al parecer no has ingresado dato en este campo zona id' })
  @IsNumber()
  readonly zone_id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'al parecer no has ingresado dato en este campo tipo id' })
  @IsNumber()
  readonly type_id: number;
}
