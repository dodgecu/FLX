function Company({ name, owner, maxCompanySize } = {}) {
  this.name = name;
  this.owner = owner;
  this.maxCompanySize = maxCompanySize;

  // Magic numbers
  const _one = 1;
  const _zero = 0;

  const _companyValidationSchema = {
    name: companyName => /^[A-Za-z\s]+$/.test(companyName),
    owner: companyOwner => /^[A-Za-z\s]+$/.test(companyOwner),
    maxCompanySize: maxEmployees =>
      parseInt(maxEmployees) === Number(maxEmployees)
  };

  const _validate = (object, schema) => {
    return Object.entries(schema)
      .map(([property, validate]) => [property, validate(object[property])])
      .reduce((errors, [property, valid]) => {
        if (!valid) {
          errors.push(`${property} is not valid.`);
        }

        return errors;
      }, []);
  };
  const _errors = _validate(this, _companyValidationSchema);

  if (_errors.length > _zero) {
    for (const message of _errors) {
      console.log(message);
    }
    return _errors;
  }

  const _logs = [];
  const _employees = [];
  const _date = () => {
    return new Date();
  };

  _logs.push(
    `${this.name} was created in ${_date().toLocaleString()}, by ${this.owner}`
  );

  this.addNewEmployee = function (employee) {
    if (employee instanceof Employee) {
      if (_employees.length < this.maxCompanySize) {
        _employees.push(employee);
        _logs.push(
          `${employee.name} starts working at ${this.name} in ${_date().toLocaleString()}`
        );
        employee.hire(this.name);
      } else {
        const lowestIncomeEmployees = _employees.filter(
          employees =>
            employees.salary ===
            Math.min(..._employees.map(worker => worker.salary))
        );
        this.removeEmployee(_employees.indexOf(lowestIncomeEmployees[_zero]));
        this.addNewEmployee(employee);
      }
    } else {
      console.log(`Please, try to add Employee instance`);
    }
  };

  this.removeEmployee = function (id) {
    if (!isNaN(parseFloat(id)) && isFinite(id)) {
      _logs.push(
        `${_employees[id].name} is fired from ${this.name} in ${_date().toLocaleString()}`
      );
      _employees[id].fire();
      _employees.splice(id, _one);
    } else {
      console.log(`Please, specify valid employee id`);
    }
  };

  this.getAvarageSalary = function () {
    const two = 2;
    const avergageSalary =
      _employees
        .map(employee => employee.salary)
        .reduce((totalSalary, salary) => {
          const average = totalSalary += salary;
          return average;
        }) / _employees.length;
    return `Average salary: ${parseFloat(avergageSalary.toFixed(two))}`;
  };

  this.getEmployees = function () {
    if (_employees.length > _zero) {
      _employees.forEach(employee => {
        console.log(`
          Employee name: ${employee.name}
          Employee age: ${employee.age}
          Employee salary: ${employee.salary}
          Employee primary skill: ${employee.primarySkill}`);
      });
    } else {
      console.log(`You are out of employees`);
    }
  };

  this.getFormattedListOfEmployees = function () {
    if (_employees.length > _zero) {
      _employees.forEach(employee => {
        console.log(`
          ${employee.name} - works in ${name} ${employee.getWorkTimeInSeconds()} seconds`);
      });
    } else {
      console.log(`You are out of employees`);
    }
  };

  this.getAvarageAge = function () {
    const avergageAge =
      _employees
        .map(employee => employee.age)
        .reduce((totalAge, age) => {
          const average = totalAge += age;
          return average;
        }) / _employees.length;

    return `Average age: ${Math.round(avergageAge)}`;
  };

  this.getHistory = function () {
    return _logs;
  };
}

function Employee({ name, age, salary, primarySkill } = {}) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.primarySkill = primarySkill;
  this.currentCompany = null;

  // Magic numbers
  const _zero = 0;
  const _thousand = 1000;

  const _employeeValidationSchema = {
    name: employeeName => /^[A-Za-z\s]+$/.test(employeeName),
    age: employeeAge => parseInt(age) === Number(employeeAge),
    salary: employeeSalary => parseInt(salary) === Number(employeeSalary),
    primarySkill: skillSet => /^[A-Za-z\s]+$/.test(skillSet)
  };

  const _validate = (object, schema) => {
    return Object.entries(schema)
      .map(([property, validate]) => {
        return [property, validate(object[property])];
      })
      .reduce((errors, [property, valid]) => {
        if (!valid) {
          errors.push(`${property} field is invalid.`);
        }

        return errors;
      }, []);
  };
  const _errors = _validate(this, _employeeValidationSchema);

  if (_errors.length > _zero) {
    for (let errorMsg of _errors) {
      console.log(errorMsg);
    }
    return _errors;
  }

  const _logs = [];
  let _startDate = _zero;
  let _endDate = _zero;
  let _totalWorkSeconds = _zero;
  const _date = () => {
    return new Date();
  };

  this.getSalary = function () {
    return this.salary;
  };

  this.setSalary = function (newSalary) {
    if (!isNaN(parseFloat(newSalary)) && isFinite(newSalary)) {
      if (newSalary > this.salary) {
        _logs.push(`change salary from ${this.salary} to ${newSalary}`);
        this.salary = newSalary;
      } else {
        console.log(`Make sure new salary is higher than the existing one!`);
        _logs.push(`try to change salary from ${this.salary} to ${newSalary}`);
      }
    } else {
      console.log(`Please, specify valid salary number!`);
    }
  };

  this.getWorkTimeInSeconds = function () {
    const currentWorkTime = (_date() - _startDate) / _thousand;
    const totalWorkTime = (_endDate - _startDate) / _thousand;
    _totalWorkSeconds += totalWorkTime;

    return this.currentCompany !== null ? currentWorkTime : _totalWorkSeconds;
  };

  this.hire = function (company) {
    _startDate = _date();
    this.currentCompany = company;
    _logs.push(
      `${this.name} is hired to ${this.currentCompany} in ${_date().toLocaleString()}`
    );
  };

  this.fire = function () {
    _endDate = _date();
    _logs.push(
      `${this.name} is fired from ${this.currentCompany} in ${_date().toLocaleString()}`
    );
    this.currentCompany = null;
  };

  this.getHistory = function () {
    return _logs;
  };
}

// let artem = new Employee({
//   name: "Artem",
//   age: 15,
//   salary: 1000,
//   primarySkill: "UX"
// });
// let vova = new Employee({
//   name: "Vova",
//   age: 16,
//   salary: 2000,
//   primarySkill: "BE"
// });
// let vasyl = new Employee({
//   name: "Vasyl",
//   age: 25,
//   salary: 1000,
//   primarySkill: "FE"
// });
// let ivan = new Employee({
//   name: "Ivan",
//   age: 35,
//   salary: 5000,
//   primarySkill: "FE"
// });
// let orest = new Employee({
//   name: "Orest",
//   age: 29,
//   salary: 300,
//   primarySkill: "AT"
// });
// let anton = new Employee({
//   name: "Anton",
//   age: 19,
//   salary: 500,
//   primarySkill: "Manager"
// });

// let epam = new Company({ name: "Epam", owner: "Arkadii", maxCompanySize: 5 });
// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);

// console.log(epam.getHistory());

// /*
// "Epam was created in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time)"
// "Artem starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Vova starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Vasyl starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Ivan starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Orest starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Orest ends working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// "Anton starts working at Epam in Tue Mar 12 2019 07:41:50 GMT+0200 (FLE Standard Time);"
// */
// epam.removeEmployee(2);

// console.log(vasyl.getHistory());

// /*
// "Vasyl is hired to Epam in Tue Mar 12 2019 07:45:55 GMT+0200 (FLE Standard Time)"
// "Vasyl is fired from Epam in Tue Mar 12 2019 07:45:55 GMT+0200 (FLE Standard Time)"
// */

// console.log(epam.getAvarageSalary()); // -> 2125
// console.log(epam.getAvarageAge()); // -> 21.25

// epam.addNewEmployee(5, 6, 9, 5); // -> Please try to add Employee instance

// setTimeout(() => {
//   epam.removeEmployee(1);
//   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
// }, 5000);

// vova.setSalary(900);
// vova.setSalary(2200);
// console.log(vova.getHistory());
// /*
// "Vova is hired to Epam in Tue Mar 12 2019 08:08:48 GMT+0200 (FLE Standard Time)"
// "try to change salary from 2000 to 900"
// "change salary from 2000 to 2200"
// */
