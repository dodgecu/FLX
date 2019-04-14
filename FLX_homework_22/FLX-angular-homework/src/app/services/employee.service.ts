import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 27,
      city: 'Tokyo',
      gender: 0,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 2,
      firstName: 'Ann',
      lastName: 'Smith',
      age: 23,
      city: 'Birmingham',
      gender: 1,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 3,
      firstName: 'Roger',
      lastName: 'Cunningham',
      age: 20,
      city: 'Lviv',
      gender: 2,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 4,
      firstName: 'Samuel',
      lastName: 'Jackson',
      age: 67,
      city: 'Toronto',
      gender: 2,
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

  constructor() {}

  getEmployees() {
    return this.employees;
  }

  addEmployees(employee: Employee): void {
    this.employees.push(employee);
  }

  deleteEmployee(id: number): void {
    this.employees.splice(id, 1);
  }

  submitEdited(id: number, data: Employee): void {
    this.employees.splice(id, 1, data);
  }
}
