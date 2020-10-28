--Insert info into department table
INSERT INTO department (department)
VALUE ("Sales"), ("Engineering"), ("Finance"), ("Legal");

--Insert info into role table
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2), ("Sales Lead", 100000, 1),
("Accountant", 125000, 3), ("Legal Team Lead", 250000, 4);

INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1), ("Lawyer", 190000, 4), 
("Software Engineer", 120000, 2);

--Insert info into employee table
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Stamen", "Grigorov", null, 1), ("Ana", "Amezcua", null, 2), 
("Landen","Kemp", null, 3), ("John", "Keeley", 1, 4), ("Jane", "Doe", 4, 5), 
("Louis", "Armstrong", 3, 6), ("Hannah", "Houara", 2, 7);