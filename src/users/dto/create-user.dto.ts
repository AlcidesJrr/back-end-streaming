import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(4, 100)
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail({ message: 'Email inválido' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  @Length(8, 12)
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  @Length(8, 12)
  confirmacaoSenha: string;
}
