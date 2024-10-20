import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsUrl, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
  @IsEmail({}, { message: 'Email ingresado es incorrecto.' })
  @Length(5, 50, { message: 'El email debe contener entre 5 y 50 caracteres' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
  @IsAlphanumeric()
  @Length(6, 10, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
  @Length(5, 25, { message: 'El nombre debe tener entre 5 y 25 caracteres' })
  readonly name: string;

  @ApiProperty()
  @IsUrl()
  readonly photoUrl: string;

  @ApiProperty()
  @IsEmpty()
  readonly provider: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { message: 'El valor debe ser un número' })
  readonly role: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }

export class SignInDto {
  @ApiProperty({ example: 'ramez@gmail.com' })
  @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
  @IsEmail({}, { message: 'Email ingresado es incorrecto.' })
  @Length(5, 50, { message: 'El email debe contener entre 5 y 50 caracteres' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
  @IsAlphanumeric()
  @Length(6, 10, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
  readonly password: string;
}

export class VerifyEmailDto {
  @ApiProperty()
  @IsEmpty()
  readonly id: number;

  @ApiProperty()
  @IsEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Opps al parecer no has ingresado dato en este campo' })
  @IsEmail()
  @Length(5, 50, { message: 'El email debe contener entre 5 y 50 caracteres' })
  readonly email: string;
}

export class UpdatePasswordDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Oops al parecer no has ingresado dato en este campo' })
  @IsAlphanumeric()
  @Length(6, 10, { message: 'La contraseña debe tener entre 6 y 10 caracteres' })
  readonly password: string;
}
