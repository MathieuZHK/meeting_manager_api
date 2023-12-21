import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
import { UserFormDto } from '../dto/userForm.dto';
import { GetCurrentUserEntrepriseIdDecorator, GetCurrentUserId, Roles } from "../../common/decorators";
import { Role } from '../../common/enums/role.enum';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  @Roles(Role.AppAdmin)
  create(@Body() dto: UserFormDto, @GetCurrentUserEntrepriseIdDecorator() entrepriseId): Promise<UserDto> {
    if(dto.enterprise_id === entrepriseId) {
      return this.userService.createUser(dto);
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getCurrentUserInfoById(@GetCurrentUserId() userId: string) {
    console.log(userId);
    return this.userService.getUserDtoById(userId);
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  deleteUserByUserId(@GetCurrentUserId() userId: string) {
    return this.userService.deleteByUserId(userId);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateUser(@GetCurrentUserId() userId: string, @Body() dto: UserFormDto) {
    return this.userService.updateUser(userId, dto);
  }
}