import { CreateCustomerDto } from './dto/create-customer-dto';
import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ];

  getCustomers(): Customer[] {
    return this.customers;
  }

  createCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: Date.now(), // Generate a unique ID based on the current timestamp
      name: createCustomerDto.name,
      age: createCustomerDto.age,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
