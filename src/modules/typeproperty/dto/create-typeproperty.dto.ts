import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateTypepropertyDto {
    @IsNotEmpty({ message: 'name no debe estar vacío' })
    @Length(6, 150, { message: 'name debe tener entre 6 y 150 caracteres' })
    readonly name: string;

    @IsString()
    @Length(5, 150, { message: 'title debe tener entre 5 y 150 caracteres' })
    readonly title: string = "";

    @IsString()
    readonly description: string = "";

}
