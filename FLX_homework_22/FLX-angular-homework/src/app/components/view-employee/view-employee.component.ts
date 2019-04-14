import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  id: number;
  private sub: any;
  employee: Employee[];
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.employee = this.employeeService
      .getEmployees()
      .filter(currentEmployee => currentEmployee.id === this.id);
  }
  onDelete(): void {
    const itemToRemove = this.employeeService
      .getEmployees()
      .filter(employee => employee.id === this.id)[0];
    this.employeeService.deleteEmployee(
      this.employeeService.getEmployees().indexOf(itemToRemove)
    );
    this.router.navigate(['/employees']);
  }
}
