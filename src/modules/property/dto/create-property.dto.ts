import { isDecimal, IsDecimal, IsNotEmpty, IsNumber, IsString, Length, MaxLength } from 'class-validator';

export class CreatePropertyDto {
    @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
    @Length(6, 150, { message: 'el nombre debe tener entre 6 y 150 caracteres' })
    readonly name: string;

    @IsString()
    @MaxLength(500, { message: 'La descripcion debe tener maximo 500 caracteres' })
    readonly description: string = "";

    @IsString()
    readonly location: string;

    @IsDecimal()
    readonly price: number;

    @IsNumber()
    readonly rating: number;

    @IsNumber()
    readonly availableRooms: number;

    @IsDecimal()
    readonly latitude: number = 0;

    @IsDecimal()
    readonly longitude: number = 0;

    @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo zona id' })
    @IsNumber()
    readonly zone_id: number;

    @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo tipo id' })
    @IsNumber()
    readonly type_id: number;
}
