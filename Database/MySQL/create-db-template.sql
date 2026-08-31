CREATE DATABASE Hamdard;

use hamdard;

show TABLES;

CREATE TABLE student (
    name VARCHAR(50),
    rollno INT,
    course VARCHAR(50)
);

INSERT INTO student(rollno, name, course)
VALUES
(101, 'Aqdas', 'BTech CSE'),
(102, 'Rahul', 'BTech CSE'),
(103, 'Aman', 'BTech IT'),
(104, 'Priya', 'BCA'),
(105, 'Rohan', 'BTech CSE'),
(106, 'Sneha', 'BBA'),
(107, 'Arjun', 'BTech ECE'),
(108, 'Anjali', 'BCA'),
(109, 'Vivek', 'BTech IT'),
(110, 'Neha', 'BTech CSE');


--selecting all data(*)
SELECT * from student;

--selecting by field name
SELECT name , course from student;

--showing data once only
SELECT DISTINCT course from student;

--clauses 

-- 1. WHERE 
SELECT * from student WHERE course = "BTech CSE";

--2. ORDER BY
SELECT * FROM student ORDER BY rollno LIMIT 5;

--3. GROUP BY
SELECT course , COUNT(*) AS total_student
FROM student
GROUP BY course;

SELECT course 
FROM student
GROUP BY course;

--count(column_name)
SELECT COUNT(rollno) from student;

--alias(AS)
SELECT course, COUNT(*)
 AS total_student 
 FROM student
 GROUP BY course;

SELECT rollno AS id 
FROM student;

select * FROM student AS student_data;

SELECT course , COUNT(*) AS total_student
FROM student
GROUP BY course;