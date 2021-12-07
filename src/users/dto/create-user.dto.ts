import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Informe o nome do usuário' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(4, 15)
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  @Length(8, 15)
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  @Length(8, 15)
  confirmacaoSenha: string;
}
