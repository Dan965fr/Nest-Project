import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model'; // זה המודל של Sequelize
import { Role } from 'src/common/enum/role.enum';

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | null> {
    return await User.findOne({ where: {  username } });
  }

  async createUser(user: { username: string; email: string; password: string; role: string }): Promise<User> {
    const role = user.role === Role.Commander ? Role.Commander : Role.Soldier;
    return await User.create({
      username: user.username,
      email: user.email,
      password: user.password,
      role,
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await User.findAll();
  }
}

