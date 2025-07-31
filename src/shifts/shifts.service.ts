// src/shifts/shifts.service.ts
import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from 'src/common/dto/create-shift.dto';
import { Shift } from 'src/models/shift.model';

@Injectable()
export class ShiftsService {
  async createShift(dto: CreateShiftDto) {
    return Shift.create(dto);
  }

  async getAllShifts() {
    return Shift.findAll();
  }
}


