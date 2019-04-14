import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  gender: string;
  description: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.city = 'london';
    this.gender = '2';
    this.age = 16;
  }

  addEmployee(): void {
    const employeeGender: number = parseInt(this.gender, 10);
    const employee = {
      id: new Date().valueOf(),
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      city: this.city,
      gender: employeeGender,
      description: this.description
    };
    this.employeeService.addEmployees(employee);
    this.router.navigate(['/employees']);
  }
}
