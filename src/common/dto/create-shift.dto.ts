import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateShiftDto {
  @IsDate()
  startTime: Date;

  @IsDate()
  endTime: Date;

  @IsString()
  @IsNotEmpty()
  location: string;
}
