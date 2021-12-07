import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(4, 100)
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Atores não pode ser vazio' })
  @Length(4, 500)
  atores: string;

  @IsString()
  @IsNotEmpty({ message: 'Diretores não pode ser vazio' })
  @Length(4, 500)
  diretores: string;

  @IsString()
  @IsNotEmpty({ message: 'Gênero não pode ser vazio' })
  genero: string;

  @IsString()
  @IsNotEmpty({ message: 'Legenda não pode ser vazio' })
  legendas: string;

  @IsString()
  @IsNotEmpty({ message: 'Idioma áudio não pode ser vazio' })
  idiomasAudio: string;

  @IsString()
  @IsNotEmpty({ message: 'Duração não pode ser vazio' })
  duracao: string;

  @IsString()
  @IsNotEmpty({ message: 'Imagem não pode ser vazio' })
  imagem: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Ano de lançamento não pode ser vazio' })
  anoLancamento: number;
}
