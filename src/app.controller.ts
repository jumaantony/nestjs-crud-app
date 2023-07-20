import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // this decorator nests the entire class
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
