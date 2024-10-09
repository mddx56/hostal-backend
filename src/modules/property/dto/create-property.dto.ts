import { IsDecimal, IsNotEmpty, IsNumber, IsString, Length, MaxLength } from 'class-validator';

export class CreatePropertyDto {
    @IsNotEmpty({ message: 'name no debe estar vacío' })
    @Length(6, 150, { message: 'name debe tener entre 6 y 150 caracteres' })
    readonly name: string;

    @IsString()
    @MaxLength(500, { message: 'description debe tener maximo 500 caracteres' })
    readonly description: string = "";

    @IsString()
    readonly location: string;

    @IsDecimal()
    readonly price: number;

    @IsNumber()
    readonly rating: number = 1;

    @IsNumber()
    readonly availableRooms: number = 0;

    readonly latitude: number = 0;

    readonly longitude: number = 0;

    @IsNotEmpty({ message: 'al parecer no has ingresado dato en este campo zona id' })
    @IsNumber()
    readonly zone_id: number;

    @IsNotEmpty({ message: 'al parecer no has ingresado dato en este campo tipo id' })
    @IsNumber()
    readonly type_id: number;
}
