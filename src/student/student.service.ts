import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Bob Johnson', age: 19 },
  ];

  getStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new Error(`Student with id ${id} not found`);
    }
    return student;
  }

  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(), // Generate a unique ID based on the current timestamp
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, data: { name?: string; age?: number }) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new Error(`Student with id ${id} not found`);
    }
    Object.assign(student, data);
    return student;
  }

  patchStudent(id: number, data: { name?: string; age?: number }) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new Error(`Student with id ${id} not found`);
    }
    Object.assign(student, data);
    return student;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new Error(`Student with id ${id} not found`);
    }
    const deletedStudent = this.students.splice(index, 1);
    return deletedStudent[0];
  }
}
