
show DATABASES;

use college_db;

show TABLES;

DESC students;
DESC courses;


--QUESTION
/*
*/
SELECT * from students;
SELECT * from courses;

INSERT INTO students (name, email, age, course_id, admission_status)
VALUES
('Aqdas Habib', 'aqdas@example.com', 20, 1, 'Pending'),
('Rahul Sharma', 'rahul@example.com', 21, 2, 'Approved'),
('Aman Khan', 'aman@example.com', 19, 3, 'Pending'),
('Priya Singh', 'priya@example.com', 20, 1, 'Approved'),
('Rohan Verma', 'rohan@example.com', 22, 2, 'Pending'),
('Sneha Patel', 'sneha@example.com', 21, 3, 'Approved'),
('Arjun Kumar', 'arjun@example.com', 20, 1, 'Pending'),
('Anjali Gupta', 'anjali@example.com', 19, 2, 'Approved'),
('Vivek Sharma', 'vivek@example.com', 21, 3, 'Pending'),
('Neha Khan', 'neha@example.com', 20, 1, 'Approved');

INSERT INTO students (name, email, age, course_id, admission_status)
VALUES
('Riya ', 'riy@example.com', 20, 5, 'Pending');

-- Sort students by age
SELECT * FROM students
ORDER BY age ASC;

-- Get the 2 youngest students
SELECT * from students
ORDER BY age ASC
LIMIT 2;

-- Find names starting with A
SELECT * from students
WHERE name LIKE 'A%';

-- Find students aged 19, 21, or 22
SELECT * FROM students
where age IN (19,21,22);

-- Find students aged between 20 and 22
SELECT * FROM students
WHERE age BETWEEN 20 AND 22;


--UPDATE
UPDATE students
SET admission_status="Approved",age=21
WHERE name = "Aqdas Habib";

--DELETE
DELETE FROM students 
WHERE name = "Rahul Sharma";


/*              JOINS               */
--INNER JOIN
SELECT students.name, courses.course_name
FROM students 
INNER JOIN courses
ON students.course_id = courses.course_id;

--INNER JOIN using ALIASES
SELECT e.name ,e.email,e.age ,d.course_name
FROM students AS e 
INNER JOIN courses AS d 
ON e.course_id = d.course_id;

--using where , order by and limit 
SELECT e.name ,e.email,e.age ,d.course_name,d.duration_years
FROM students AS e 
INNER JOIN courses AS d 
ON e.course_id = d.course_id
WHERE course_name = "Btech"
ORDER BY age DESC
LIMIT 4;

--left JOIN contain all elements of left table and matching elements of right table
select e.name,e.email,d.duration_years
from students as e
left join courses as d
on e.course_id = d.course_id;


--Right JOIN contain all elements of right table and matching elements of left table
select e.name,e.email,d.duration_years
from students as e
right join courses as d
on e.course_id = d.course_id;

--CROSS JOIN combines every row from one table with every row from another table.
SELECT e.name, d.course_name
FROM students e
CROSS JOIN courses d;


--Question Practice
--1. 
select e.name ,d.course_name,e.admission_status
from students as e
LEFT join courses as d 
on e.course_id = d.course_id;


--2. using IS NULL 
select e.name,d.duration_years
from students as e 
left join courses as d 
on e.course_id = d.course_id
where d.duration_years IS NULL;