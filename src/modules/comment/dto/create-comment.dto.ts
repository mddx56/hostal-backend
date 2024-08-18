import { IsDecimal, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCommentDto {
    @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
    @Length(1, 650, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
    readonly content: string;

    
}
