import { Injectable,UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from 'src/common/dto/register.dto';
import { LoginDto } from 'src/common/dto/login.dto';
import { Role } from '../common/enum/role.enum';


@Injectable()
export class AuthService {
    constructor(
        private jwtService:JwtService,
        private userService:UsersService,
    ){}

    async register(registerDto: RegisterDto){
        const {username,password,role} = registerDto;

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await this.userService.createUser({
            username,
            password: hashedPassword,
            role: role || Role.Soldier,
        });
        return {msg:"User register successfuly", user};
    }


    async login(loginDto: LoginDto){
        const {username,password} = loginDto;
        const user = await this.userService.findUserByName(username);

        if(!user || !(await bcrypt.compare(password, user.password))){
            throw new UnauthorizedException('Invalid crendentials')
        }

        const payload = {sub: user.id , username: user.username , role: user.role};
        const token = this.jwtService.sign(payload);


        return {access_token: token}

        

        
    }
}