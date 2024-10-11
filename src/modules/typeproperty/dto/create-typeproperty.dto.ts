import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateTypepropertyDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'name no debe estar vacío' })
    @Length(6, 150, { message: 'name debe tener entre 6 y 150 caracteres' })
    readonly name: string;

    @ApiProperty()
    @IsString()
    @Length(5, 150, { message: 'title debe tener entre 5 y 150 caracteres' })
    readonly title: string = "";

    @ApiProperty()
    @IsString()
    readonly description: string = "";

}
