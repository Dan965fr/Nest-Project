// src/shifts/shifts.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from 'src/common/dto/create-shift.dto';

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Post()
  createShift(@Body() dto: CreateShiftDto) {
    return this.shiftsService.createShift(dto);
  }

  @Get()
  getShifts() {
    return this.shiftsService.getAllShifts();
  }
}

