import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        first_name: data.first_name,
        email: data.email,
        email_verified: data.email_verified,
        is_active: data.is_active,
        password: data.password,
        enterprise_id: data.enterprise_id
      },
    });
  }

  async getUserById(userId: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id: userId
      },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUser(data: User): Promise<User> {
    if (data.password === '') {
      return this.prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          id: data.id,
          name: data.name,
          first_name: data.first_name,
          email: data.email,
          email_verified: data.email_verified,
          is_active: data.is_active,
        },
      });
    } else {
      return this.prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          id: data.id,
          name: data.name,
          first_name: data.first_name,
          email: data.email,
          email_verified: data.email_verified,
          password: data.password,
          is_active: data.is_active,
        },
      });
    }
  }

  async deleteUser(userId: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

  async countAllUsers(): Promise<number> {
    return this.prisma.user.count();
  }

  async checkIfUserExistByEmailOrNickname(
    email: string,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  async updateRefreshTokenByUserId(userId: string, refreshToken: string) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refresh_token: refreshToken,
      },
    });
  }

  async deleteRefreshTokenByUserId(userId: string) {
    return this.prisma.user.updateMany({
      where: {
        id: userId,
        refresh_token: {
          not: null,
        },
      },
      data: {
        refresh_token: null,
      },
    });
  }
}