import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserController } from "../controller/user.controller";
import { UserRepository } from "../repository/user.repository";
import { PrismaService } from "../../prisma/prisma.service";

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, PrismaService],
      controllers: [UserController]

    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});