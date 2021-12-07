import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post('add/')
  create(@Body() data: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.create(data);
  }

  @Get('all')
  findAll(): Promise<any[]> {
    return this.filmesService.findAll();
  }

  @Get('filme/:id')
  findOne(@Param('id') id: string): Promise<Filme> {
    return this.filmesService.findOne(id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateFilmeDto,
  ): Promise<Filme> {
    return this.filmesService.update(id, data);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.filmesService.remove(id);
  }
}
