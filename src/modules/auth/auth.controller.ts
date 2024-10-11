import { Body, Controller, Get, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Throttle } from '@nestjs/throttler';
import { PersonDto, SignInDto, VerifyEmailDto } from 'src/modules/user/dto/person.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) { }

  @Post('signUp')
  async createAccount(@Body() signUpDto: PersonDto) {
    this.logger.log(`Solicitud de nueva cuenta recibida para el usuario ${signUpDto.email}`);
    return await this.authService.signUp(signUpDto);
  }

  @Throttle({ default: { limit: 50, ttl: 60000 } })
  @Post('signIn')
  async signIn(@Body() signInDto: SignInDto) {
    this.logger.log(`Solicitud de inicio de sesión recibida para el usuario ${signInDto.email}`);
    return await this.authService.signIn(signInDto);
  }

  @Post('refresh')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @Post('sendPasswordReset')
  async sendPasswordResetEmail(@Body() resetDto: VerifyEmailDto) {
    return await this.authService.sendPasswordResetEmail(resetDto);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Se inicia el flujo de autenticación con Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    this.logger.log(`Solicitud de inicio de sesión recibida para el usuario ${req.user.username}, ${req.user}`);
    return req.user;
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req) {
    // Inicia el flujo de inicio de sesión de GitHub
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthRedirect(@Req() req) {
    this.logger.log(`Solicitud de inicio de sesión recibida para el usuario ${req.user.username}, ${req.user}`);
    return req.user;
  }
}
