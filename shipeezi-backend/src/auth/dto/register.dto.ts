import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'O email deve ser válido' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;
}
