import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateZoneDto {

    @IsNotEmpty()
    @Length(5, 170, { message: "Longituds" })
    readonly name: string;

    @IsString()
    readonly description: string = "";
}
