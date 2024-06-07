- Create Database dbName,
- Drop database dbname,

```sql
Create Table tableName(
   col1_Name Datatype(size)
   col2_Name Datatype(size)
   col3_Name Datatype(size)
)
```
- Drop Table tableName,
- Rename table oldName to newName,
```sql
 Schema

 Create Table students(
   Roll int,
   Name Varchar(20)
   Gender Varchar(20)
   Name Varchar(20)
   Age int()
   GPA double()
   City Varchar(20)
   PRIMARY KEY(Roll)

)
Insert Reacords

INSERT INTO students VALUES(
    103, "Sakin", "male", 21, 5.00, "rajshahi");
```

- Find items
```sql

SELECT * FROM students
SELECT name , age, gpa, city from student;

=> DISTINCT (Dont want repeat value)

SELECT DISTINCT City
FROM student

=> Limit

SELECT roll,City 
FROM student
LIMIT 2,3 (skip 1st 2 row , Show next 3 row)
```
- Sorting
```sql
SELECT name , age FROM student ORDER BY age
SELECT name , age FROM student ORDER BY age DESC
```
```sql
WHERE 

SELECT Country
FROM students
WHERE Gender ="Female";

SELECT  DISTINCT Country
FROM students
WHERE Gender ="Female";

SELECT  DISTINCT Country
FROM students
WHERE Gender ="Female"
ORDER BY Country;

SELECT Name , Age FROM students
WHERE Age>20

SELECT * FROM students
WHERE Age=20

SELECT * FROM students WHERE Age BETWEEN 22 AND 25 

```

- Arethmetics Query 
```sql
SELECT * FROM students WHERE Age = 20  and Gender="female" AND Country ="Brazil"
---
SELECT * FROM students WHERE GPA<3.5 AND Gender="female" AND Country="Romania"

IN

SELECT * FROM students WHERE Country in ("Brazil","Australia",'France')

SELECT * FROM students WHERE Country NOT IN ("Brazil","Australia",'France')

LIKE

SELECT * FROM students WHERE Country LIKE "Ar%"
```

```sql
CREATE TABLE Teacher(
   ID int NOT Null AUTO_INCREMENT,
    Name varchar(15) NOT Null ,
    Salary double(10,2) ,
    PRIMARY KEY(ID)
); 
```
