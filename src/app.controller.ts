import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/guard/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  @UseGuards(AuthGuard)
  getTeste(): string {
    return "Este é apenas um teste"
  }
}
