// problem 1
const employeesOG = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
  ];

console.log('Question 1', employeesOG)
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
  ];

// problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };

console.log('Question 2', company)

// problem 3
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

console.log('Question 3',employees)

// problem 4
let totalSalary = 0;
company.employees.forEach(employee => {
  totalSalary += employee.salary;
});

console.log('Question 4', 'Total Salary:', totalSalary);

// problem 5
// if true increase salary by .10
function giveRaise(employees) {
    employees.forEach(employee => {
      if (employee.raiseEligible) {

        employee.salary += employee.salary * 0.10; 

        //change eligibility to false so it olny raises once
        employee.raiseEligible = false;

      }
    });
  }
  
giveRaise(company.employees);
console.log("Question 5", company.employees);

// problem 6
const employeesWorkingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
  employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});

console.log("Question 6", company.employees);