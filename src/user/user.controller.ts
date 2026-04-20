import { Controller, Get } from '@nestjs/common';

@Controller('user') //decorator to define the route for this controller
export class UserController {
  @Get()
  getUser() {
    return { name: 'Ashish Sharma king', age: 37 }; //returning a sample user object
  }
}
