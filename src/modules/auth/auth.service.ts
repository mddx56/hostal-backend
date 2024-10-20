import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { CreateUserDto, SignInDto, VerifyEmailDto } from 'src/modules/user/dto/person.dto';
import { NodemailerService } from '../nodemailer/nodemailer.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private readonly nodemailerService: NodemailerService,

    @InjectPinoLogger(AuthService.name)
    private readonly logger: PinoLogger,
  ) { }

  private async generateToken(payload: any, expiresIn: string, secret: string) {
    return this.jwtService.sign(payload, { expiresIn, secret });
  }

  async generateTokens(user: UserEntity) {
    const payload = { sub: user.id, email: user.email, role: user.role, purpose: 'sign in / sign up' };
    const token = await this.generateToken(payload, '5m', 'JWT_SECRET');

    const refreshPayload = { sub: user.id, email: user.email, role: user.role, purpose: 'refresh' };
    const refreshToken = await this.generateToken(refreshPayload, '10m', 'JWT_SECRET');

    this.logger.debug({ context: 'AuthService', message: `Token generado para usuario ${user.email}` });
    return { id: user.id, name: user.name, email: user.email, role: user.role, token, refreshToken };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken);
      if (payload.purpose !== 'refresh') throw new UnauthorizedException('El refresh token proporcionado no es válido');

      const user = await this.userRepository.findOne({ where: { email: payload.email } });
      if (!user) throw new UnauthorizedException('Usuario no encontrado.');

      const newPayload = { sub: user.id, email: user.email, role: user.role, purpose: 'newToken' };
      const newToken = await this.generateToken(newPayload, '5m', 'JWT_SECRET');

      this.logger.debug({ context: 'AuthService', message: `Token actualizado para el usuario ${user.email}` });
      return { token: newToken };
    } catch (error) {
      this.logger.error('Error al refrescar el token', error);
      throw new UnauthorizedException('Refresh token inválido');
    }
  }

  async findOneByEmail(userEmail: string) {
    return this.userRepository.findOne({ where: { email: userEmail } });
  }

  async signUpWithProvider(userData: Partial<UserEntity>): Promise<UserEntity> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  generateRandomPassword(): string {
    const randomPassword = Math.random().toString(36).slice(-8);
    this.logger.debug({ context: 'AuthService', message: `Contraseña aleatoria: ${randomPassword}` });
    return randomPassword;
  }

  async signUp(signUpDto: CreateUserDto) {
    const existingUser = await this.findOneByEmail(signUpDto.email);
    if (existingUser) throw new UnauthorizedException('Pruebe con un correo electrónico diferente.');

    const newUser = this.userRepository.create(signUpDto);
    const savedAccount = await this.userRepository.save(newUser);

    this.logger.debug({ context: 'AuthService', message: `Usuario ${newUser.email} registrado` });
    return this.generateTokens(savedAccount);
  }

  async validateUser(useremail: string, userpassword: string): Promise<any> {
    const user = await this.findOneByEmail(useremail);
    if (!user) throw new UnauthorizedException('Email no fue encontrado');

    const isPasswordValid = await compare(userpassword, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Contraseña incorrecta.');

    const { password: _, ...result } = user;
    this.logger.debug({ context: 'AuthService', message: `Usuario ${useremail} validado` });
    return result;
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.validateUser(signInDto.email, signInDto.password);
    this.logger.debug({ context: 'AuthService', message: `Usuario ${signInDto.email} ha iniciado sesión` });
    return this.generateTokens(user);
  }

  async sendPasswordResetEmail(reset: VerifyEmailDto) {
    const user = await this.findOneByEmail(reset.email);
    if (!user) throw new UnauthorizedException('Este email es invalido, por favor vuelva a intentarlo.');

    const payload = { id: user.id, role: user.role, purpose: 'Reset Password' };
    const tokenReset = await this.generateToken(payload, '10m', 'JWT_SECRET');

    const checkLink = `http://localhost:3000/auth/recover/password/?id=${user.id}&token=${tokenReset}`;

    await NodemailerService.sendPasswordResetEmail(user.email, user.name, checkLink);

    this.logger.debug({ context: 'AuthService', message: `Restablecimiento de contraseña enviado a ${user.email}` });
    return { message: `Se ha enviado el correo electronico a: ${user.email}`, tokenReset };
  }
}
