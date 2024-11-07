import { SetMetadata } from '@nestjs/common';
import { RoleEnum } from '../interfaces/user.interface';

export const HasRoles = (...roles: RoleEnum[]) => SetMetadata('roles', roles);