import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateTypepropertyDto {
    @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
    @Length(6, 150, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
    readonly name: string;

    @IsString()
    @Length(5, 150, { message: 'El titulo debe tener entre 5 y 25 caracteres' })
    readonly title: string = "";

    @IsString()
    @Length(5, 600, { message: 'La descripcion debe tener entre 5 y 25 caracteres' })
    readonly description: string = "";

}
