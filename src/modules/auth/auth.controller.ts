import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleGuard } from './guard/google.guard';
import { Request } from 'express';

@Controller('api/auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @UseGuards(GoogleGuard)
  @Get('google/login')
  handlerLogin() {
    return this.authService.handlerLogin()
  }

  @UseGuards(GoogleGuard)
  @Get('google/redirect')
  handlerRedirect(@Req() req, @Res() res) {
    res.redirect('/')
  }

  @Get('status')
  user(@Req() req: Request) {
    if (req.user) {
      return { message: 'Authenticated', user: req.user }
    } else {
      return { message: 'Not Authenticated' }
    }
  }
}