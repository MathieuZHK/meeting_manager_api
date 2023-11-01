import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Public } from "./common/decorators";

@Controller()
export class AppController {
  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  getHello(): string {
    return "Welcome to the meeting manager api 2023.1.0.alpha1";
  }
}
