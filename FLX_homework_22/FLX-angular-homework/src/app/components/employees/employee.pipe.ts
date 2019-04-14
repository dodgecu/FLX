import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../../models/Employee';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {
  transform(employees: Employee[], searchTerm: string): Employee[] {
    if (!employees || !searchTerm) {
      return employees;
    }

    return employees.filter(
      employee =>
        employee.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
          -1 ||
        employee.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
