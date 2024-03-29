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

    /*
      Added a valid input check for every variable
      If the user selects "cancel", the employee is not added and the program stops
      Ex: If first and last name are input, but salary is cancelled, the whole set of inputs is voided
      alert will only display a message to the user (no actions are necessary)

      Edit: Added a nested set of if-else statements which removes the need to stop the program
      This will let the user cancel if they input wrong at any point and allow them to redo/continue
    */
    const firstName = prompt("Enter the employee's first name:");
    
    if (firstName === null) {
      alert("Cancelled adding the employee.\nPress OK to return to the 'add employee' screen ...");
    }
  
    else {
      const lastName = prompt("Enter the employee's last name:");
      
      if (lastName === null) {
        alert("Cancelled adding the employee.\nPress OK to return to the 'add employee' screen ...");
      }
    
      else {
        let salary = prompt("Enter the employee's salary:");
        
        if (salary === null) {
          alert("Cancelled adding the employee.\nPress OK to return to the 'add employee' screen ...");
        }

        else {
          // Checks if salary is not a number (NaN), then assigns 0 if it is true
          // Added a check if the user enters a negative number then assign the salary to 0
          if(isNaN(salary) || (salary <= 0)) {
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
        }
      }
    }

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
  // Added a check that if the employee list is empty, the average salary cannot be calculated
  if (employeesArray.length === 0) {
    console.log("The employee list is empty. The average salary cannot be calculated at this time.");
    return;
  }
  
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
  // Added a check that if the employee list is empty, the random drawing winner cannot be selected
  if (employeesArray.length === 0) {
    console.log("The employee list is empty. The random drawing winner cannot be selected at this time.");
    return;
  }
  
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
