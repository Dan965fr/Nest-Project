import { Injectable } from '@nestjs/common';
import { Role } from 'src/common/enum/role.enum';
import { User } from 'src/users/user.interface';


@Injectable()
export class UsersService {
    private users : User[] =  []
    private idCounter = 1;
       

    findUserByName(username:string) : User | undefined{
        return this.users.find(user => user.username === username);

    }


    createUser(user:{username: string; password: string; role: string}) : User {
        const role = user.role === Role.Commander ? Role.Commander : Role.Soldier;
        const newUser : User = {id: this.idCounter++, username: user.username, password: user.password,role};
        this.users.push(newUser);
        return newUser;
    }
    
    getAllUsers() : User[] {
        return this.users;
    }
}
