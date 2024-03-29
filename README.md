# Employee Payroll Tracker Challenge - Predicting User Inputs

## Description

This is an application that enables a payroll manager to view and manage employee payroll data. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The application features the following functions:

- collectEmployees: This function will allow a user to add multiple employees to display on the page. The user will need to enter the first name, last name, and salary of each employee, then have the option to keep adding employees until they choose to stop.

- displayAverageSalary: This function will take in the generated array of employees and log the average salary and number of employees to the console.

- getRandomEmployee: This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console.

- displayEmployees: This function will take in an array of employees and render each employee to an HTML table.

- trackEmployeeData: This function will execute when the "Add Employees" button is clicked. It will take the array generated in your collectEmployees function, sort the employees by last name, and place them on a table on the page using the provided displayEmployees function. Additionally, the function will execute the displayAverageSalary function to log the average employee salary to the console, and execute the getRandomEmployee function to log a random employees information to the console.

## Installation

No installation is required!  This code has been deployed to GitHub Pages so that you can view it on your own device.  To do so, please visit the following link: https://kitkatbar.github.io/employee-payroll-tracker-challenge/

## Usage

Please refer to the following image showing the functionality of the application.  The website should display the inputs (assuming they are all valid) entered by the user, and the console log will display various text that are calculated using the information in the table.

https://github.com/KitKatBar/employee-payroll-tracker-challenge/blob/main/assets/images/employee-payroll-tracker-demo.png?raw=true

When you first load the webpage, you will see an empty Employee Roster table with columns on what employee data will be collected (First Name, Last Name and Salary) and an "Add Employees" button.

Clicking on the "Add Employees" button will open up a prompt asking for user input, starting with inputting an employee's first name, followed by their last name and finally their salary.  Cancelling the input at any point will display an alert message and the employee is not added to the table.  So if the user enters a first name, enters a last name, but decides to cancel inputting the salary because they messed up by entering a wrong name (or just because the user wants to), then all of the previous input is voided.  It will then return the user to the "main menu", which is a prompt asking if the user would like to add another employee.

Please also note that attempted to enter a non-number or negative salary will result in the salary input being defaulted to 0.  Currently, I have no way of catching salary inputs that are ridiculously large and go above a certain number (in fact I don't even know what that number is).

Once the user is done inputting employee data, the website will update in real-time and display all the employees in the table sorted by their last name.

You can then open up the he Chrome DevTools by pressing Command+Option+I (macOS) or Control+Shift+I (Windows) or you can right click -> 'Inspect' anywhere on the page of the website.  You will most likely be on the "Elements" tab so go to the "Console" tab which is right next to it.  There you will be presented with a text display of the employee array.  If you already had the console tab opened before adding employees, the table is displayed in the order you entered the employees so don't be alarmed if what is displayed on the webpage and what is shown in the console log is different.  Otherwise, if you opened the console log after adding the employees, the table should displayed the sorted version.  You will also see text showing the average salary calculated from all the employees formatted in USD currency.  You will also see the first and last name of an employee who is selected to be the random drawing winner.

## Tests

I am still inexperienced in writing any test data.  I also do not know how to add a test data file nor do I know what format the file should be in.  So I will just suggest some inputs here for the user to consider.

You may enter anything for the first and last name, but for the salary you can consider these inputs:
- A string input -> Expected: the salary will be changed to 0
- A negative number -> Expected: the salary will be changed to 0
- Hitting OK or enter -> Expected: the salary will be changed to 0
- Hitting cancel -> Expected: employee is not added to the table and return to "main menu"
- A large number like 9999999999999999999 -> Expected: not sure, but there should be a value limit

In the case of the last input, the actual result is that the salary gets changed to 1000000000000000000 or something with a bunch of repeating 0s.  The salary displayed on the webpage also flies off the right side of the screen because it is larger than the box that can hold it.  Maybe these types of inputs will be considered in the future, but for now there is no immediate fix.

## Credits

MDN Web Docs Reference for providing insight: https://developer.mozilla.org/en-US/docs/Web/CSS/

Our instructor Drew Hoang for spending time after class providing any students who stay some mock assessments that test what we learned in class.  These assessments can range from simply printing numbers from 1-100, only the even or odd numbers or finding numbers in an array.  His speed-run videos are also very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain how he would tackle practice problems.  He also provides help on module assignments and helps explain the criteria so we can better understand what we need to do.

Me for being considerate and thinking about all the crazy things users could attempt to input (and making developers' lives miserable) except for that specifically obvious one above that I mentioned a couple times. 🙂

## License

This project was built using the MIT License.  Please refer to the LICENSE in the repo for more information.