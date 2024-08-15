import { isDecimal, IsDecimal, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
    @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
    @Length(6, 150, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
    readonly name: string;

    @IsString()
    @Length(5, 325, { message: 'El nombre debe tener entre 5 y 25 caracteres' })
    readonly description: string;

    @IsString()
    readonly location: string;

    @IsDecimal()
    readonly price: number;

    @IsNumber()
    readonly rating: number;

    @IsNumber()
    readonly availableRooms: number;

    @IsDecimal()
    readonly latitude: number;

    @IsDecimal()
    readonly longitude: number;
}
