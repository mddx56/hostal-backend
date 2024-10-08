import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFavoriteDto {

    @IsNotEmpty({ message: 'user_id no debe estar vacío' })
    @IsNumber()
    user_id: number;

    @IsNotEmpty({ message: 'property_id no debe estar vacío' })
    @IsNumber()
    property_id: number;
}
