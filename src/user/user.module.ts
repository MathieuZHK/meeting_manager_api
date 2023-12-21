import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaService } from "../prisma/prisma.service";
import { UserRepository } from './repository/user.repository';
import { UserController } from "./controller/user.controller";

@Module({
  providers: [UserService, PrismaService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}