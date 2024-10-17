import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/shared/decorators/auth.decorator';
import { RoleEnum } from 'src/shared/interfaces/user.interface';
import { UpdatePasswordDto } from 'src/modules/user/dto/person.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Get()
  async findAll() {
    try {
      const data =
        await this.userService.findAll();
      return {
        success: true,
        data,
        message: 'Users Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Auth(RoleEnum.ADMIN, RoleEnum.MEMBER)
  @Patch('recoverPassword/:id')
  async recoverPassword(@Param('id') id: number, @Body() updatePasswordDto: UpdatePasswordDto) {
    return this.userService.recoverPassword(id, updatePasswordDto);
  }
}
