import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFeaturepropertyDto {

    @IsNotEmpty({ message: 'feature_id no debe estar vacío' })
    @IsNumber()
    feature_id: number;

    @IsNotEmpty({ message: 'property_id no debe estar vacío' })
    @IsNumber()
    property_id: number;
}
