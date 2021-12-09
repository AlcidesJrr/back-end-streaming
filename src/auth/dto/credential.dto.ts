/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CredentialDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 15)
  senha: string;
}
