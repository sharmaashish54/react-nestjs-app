import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() data: { name: string; age: number }) {
    return this.studentService.createStudent(data);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() data: { name?: string; age?: number },
  ) {
    return this.studentService.updateStudent(Number(id), data);
  }

  @Put(':id/patch')
  patchStudent(
    @Param('id') id: string,
    @Body() data: { name?: string; age?: number },
  ) {
    return this.studentService.patchStudent(Number(id), data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
