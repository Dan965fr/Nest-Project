import { IsString,IsEmail,IsNotEmpty, MinLength, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;


  @IsEmail()
  @IsNotEmpty()
  email:string



  @IsString()
  @MinLength(4)
  password: string;

  @IsIn(['soldier', 'commander'])
  role: string;
}
