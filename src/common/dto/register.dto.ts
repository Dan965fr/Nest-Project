import { IsString, MinLength, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(4)
  password: string;

  @IsIn(['soldier', 'commander'])
  role: string;
}
