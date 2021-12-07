import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotAcceptableException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    if (data.senha !== data.confirmacaoSenha) {
      throw new UnauthorizedException('Senhas não compatíveis');
    }

    const userExists = await this.db.user.findUnique({
      where: { email: data.email },
    });
    if (userExists) {
      throw new ConflictException('E-mail já cadastrado');
    }
    const saltos = 12;
    const hashDaSenha = await bcrypt.hash(data.senha, saltos);

    delete data.confirmacaoSenha;

    const user = await this.db.user.create({
      data: {
        ...data,
        senha: hashDaSenha,
      },
    });
    delete user.senha;
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
