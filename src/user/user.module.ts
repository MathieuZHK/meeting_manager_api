import { Module } from '@nestjs/common';
//import { UserService } from './service/user.service';
//import { UserController } from './controller/user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from './repository/user.repository';

@Module({
  providers: [PrismaService, UserRepository],
  controllers: [],
})
export class UserModule {}