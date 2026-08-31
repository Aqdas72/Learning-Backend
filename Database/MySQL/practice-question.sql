/*
Create a table called Employees with the following columns:
EmployeeID (integer, primary key)
FirstName (varchar, 50)
LastName (varchar, 50)
Age (integer)
Salary (decimal)
Insert a new record into the Employees table:
EmployeeID = 1, FirstName = 'John', LastName = 'Doe', Age = 30, Salary = 60000

*/

show TABLES;

CREATE Table Employees(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    Salary DECIMAL
);

INSERT INTO employees VALUES (1,"Aqdas","Habib",21,90000.23);

SELECT * FROM employees;

DESC employees; 