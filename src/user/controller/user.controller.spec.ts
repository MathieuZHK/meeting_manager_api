import { UserController } from './user.controller';
import { Test, TestingModule } from "@nestjs/testing";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";
import { UserModule } from "../user.module";
import { PrismaService } from "../../prisma/prisma.service";

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository, PrismaService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});