import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from 'src/common/enum/role.enum';
import { UnauthorizedException } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Req() req: any) {
    const user = req.user;

    if(!user){
        throw new UnauthorizedException('User not found in request');
    }

    if (user.role === Role.Commander) {
      return this.usersService.getAllUsers();
    } else {
      const currentUser = this.usersService.findUserByName(user.username);
      return currentUser ? [currentUser] : [];
    }
  }
}

