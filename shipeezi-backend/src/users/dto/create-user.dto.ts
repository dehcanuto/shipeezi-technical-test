import {
  IsOptional,
  IsString,
  MinLength,
  IsEmail,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullName: string;

  @IsString()
  username: string;

  @IsEmail({}, { message: 'O email deve ser válido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;

  @IsOptional()
  @IsString()
  birthdate?: string;

  @IsOptional()
  @IsNumber()
  gender?: number;

  @IsOptional()
  @IsString()
  phone?: string;
}
