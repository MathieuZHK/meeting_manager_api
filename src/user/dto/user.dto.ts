import { Role } from "../../common/enums/role.enum";

export interface UserDto {
  id: string;
  name: string | null;
  first_name: string | null;
  email: string | null;
  is_active: boolean | null;
  role: string;
}