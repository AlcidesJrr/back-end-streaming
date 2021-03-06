import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class UpdateFilmeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(4, 100)
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Atores não pode ser vazio' })
  @Length(4, 500)
  atores: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Diretores não pode ser vazio' })
  @Length(4, 500)
  diretores: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Gênero não pode ser vazio' })
  genero: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Legenda não pode ser vazio' })
  legendas: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Idioma áudio não pode ser vazio' })
  idiomasAudio: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Duração não pode ser vazio' })
  duracao: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Imagem não pode ser vazio' })
  imagem: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'Ano de lançamento não pode ser vazio' })
  anoLancamento: number;
}
