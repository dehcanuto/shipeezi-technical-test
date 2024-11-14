import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'O email deve ser válido' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  password: string;
}
