// Problem 1: Creating a JSON for each employee
const employee1 = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
  };
  
const employee2 = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
  };
  
const employee3 = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
  };

console.log("Problem 1 - JSON for each employee");
console.log(employee1, employee2, employee3);


// Problem 2: Create JSON for the company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [employee1, employee2, employee3]
  };
  
  console.log("Problem 2 - JSON for the company");
  console.log(company);


// Problem 3: Add new employee Anna
const employee4 = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };

company.employees.push(employee4);

console.log("Problem 3 - adding Anna employee");
console.log(company);


// Problem 4: Calculate total salary
let totalSalary = 0;
for (const emp of company.employees) {
  totalSalary += emp.salary;
}

console.log("Problem 4 - Total salary for all employees:", totalSalary);

// Problem 5: Apply raises
function applyRaises(companyObj) {
    for (const emp of companyObj.employees) {
        if (emp.raiseEligible) {
            emp.salary *= 1.10;
            emp.raiseEligible = false;
        }
    }
}

applyRaises(company);

console.log("Problem 5 - Salaries after raises:");
console.log(company);
  

// Problem 6: Work from home updates
const wfhEmployees = ['Anna', 'Sam'];

for (const emp of company.employees) {
    emp.wfh = wfhEmployees.includes(emp.firstName);
}

console.log("Problem 6 - Final company JSON with WFH:");
console.log(company);