enum EmployeeGender {
  male = 0,
  female = 1,
  undisclosed = 2
}
export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  gender: EmployeeGender;
  description: string;
}
