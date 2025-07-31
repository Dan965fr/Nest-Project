import { Controller, Post, Body, Get } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from 'src/common/dto/create-assigments.dto';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post()
  createAssignment(@Body() dto: CreateAssignmentDto) {
    return this.assignmentsService.createAssignment(dto);
  }

  @Get()
  getAssignments() {
    return this.assignmentsService.getAllAssignments();
  }
}

