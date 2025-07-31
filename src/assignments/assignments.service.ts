import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from 'src/common/dto/create-assigments.dto';
import { Assignment } from 'src/models/assignment.model';

@Injectable()
export class AssignmentsService {
    async createAssignment(dto:CreateAssignmentDto) {
        return Assignment.create(dto);
    }

    async getAllAssignments() {
        return Assignment.findAll();
    }
}
