import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateZoneDto {

    @IsNotEmpty({ message: 'name no debe estar vacío' })
    @Length(5, 170, { message: "name debe tener entre 5 y 170 caracteres" })
    readonly name: string;

    @IsString()
    readonly description: string = "";
}
