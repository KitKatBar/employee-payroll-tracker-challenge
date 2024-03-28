// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Declare an empty array to store our employees
  const employeeArray = [];
  // Define a variable to keep asking the user for input
  let input = true;

  // If the user wants to keep adding employees, then we keep going
  while (input) {
    /*
      prompt opens up a window that lets a user enter input, with options "ok" and "cancel"
      Returns the input (which can be an empty string) if "ok" is selected
      Returns null if "cancel" is selected
    */
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    // Checks if salary is not a number (NaN), then assigns 0 if it is true
    if(isNaN(salary)) {
      salary = 0;
    }

    /*
      Employee object that has a first name, last name and salary
      The input is assigned to each value, but the salary must be parsed because the input is a string
    */
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    }

    // Add the employee to the employee array
    employeeArray.push(employee);

    /*
      confirm opens up a window with options "ok" and "cancel" and returns a boolean
      Returns true if "ok" is selected
      Returns false if "cancel" is selected
    */
    input = confirm("Do you want to add another employee?");
  }

  // Return the employee array
  return employeeArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Declare a sum variable initialized to zero so we can add the total of all the employee's salaries
  let salarySum = 0;
  
    // Iterate over the employee list and sum up their salaries
    for (let i = 0; i < employeesArray.length; i++) {
      salarySum = salarySum + employeesArray[i].salary;
    }
  
  // Calculate the average salary by dividing the total salary by the number of employees
  const averageSalary = salarySum / employeesArray.length;
  
  /*
    Display the number of employees and the average salary between them
    toLocaleString() will format the display to a string, in this case, displaying it as USD currency
  */
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  /*
    Math.random() returns a number between 0 (inclusive) and 1 (exclusive)
    We can use this function to get an index in the array by multiplying it by the array's length
    Math.floor() will round down so that we get valid indexes
  */
  const random = Math.floor(Math.random() * employeesArray.length);
  
  // Display the random drawing winner's first name and last name to the console log
  console.log(`Congratulations to ${employeesArray[random].firstName} ${employeesArray[random].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
