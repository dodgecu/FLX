import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-instance',
  templateUrl: './employee-instance.component.html',
  styleUrls: ['./employee-instance.component.scss']
})
export class EmployeeInstanceComponent implements OnInit {
  @Input() employee: Employee;
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter();
  constructor(private employees: EmployeeService) {}

  ngOnInit() {}

  onDelete(employee) {
    this.deleteEmployee.emit(employee);
    this.employees.deleteEmployee(
      this.employees.getEmployees().indexOf(employee)
    );
  }
}
