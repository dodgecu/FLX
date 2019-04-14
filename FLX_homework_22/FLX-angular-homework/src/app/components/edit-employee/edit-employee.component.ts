import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  id: number;
  private sub: any;
  private index: number;
  employee: Employee[];
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

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.employee = this.employeeService
      .getEmployees()
      .filter(currentEmployee => currentEmployee.id === this.id);
    const {
      firstName,
      lastName,
      age,
      city,
      gender,
      description
    } = this.employee[0];
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.gender = gender.toString();
    this.description = description;
  }

  submitEdits() {
    const gender: number = parseInt(this.gender);
    const employee = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      city: this.city,
      gender: gender,
      description: this.description
    };
    this.index = this.employeeService.getEmployees().indexOf(this.employee[0]);
    this.employeeService.submitEdited(this.index, employee);
    this.router.navigate(['/employee', this.id]);
  }
}
