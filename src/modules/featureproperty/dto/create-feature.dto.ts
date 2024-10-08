import { IsNotEmpty, Length } from "class-validator";

export class CreateFeatureDto {

    @IsNotEmpty({ message: 'name no debe estar vacío' })
    @Length(3, 170, { message: "name debe tener entre 5 y 170 caracteres" })
    readonly name: string;

    readonly icon: string;
}
