import {
  IsEmail, isNotEmpty,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from "class-validator";
import { Match } from "../../common/decorators";
import { Role } from "../../common/enums/role.enum";

export class UserFormDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Match('password')
  confirmPassword: string;
  oldPassword: string;
  isActive: boolean;
  @IsNotEmpty()
  enterprise_id: string;
  @IsNotEmpty()
  role: Role;
}
