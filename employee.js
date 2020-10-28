const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

//connect to MySQL
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "******",
    database: "employee_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "Main Menu",
            choices: ["Add Employee", "Add Role", "Add Department", "View All Employees", "View All Employees By Role",
                "View All Employees By Department", "View All Roles", "View All Departments", "Update An Employee Role", "Exit",],
        }
    ]).then((res) => {
        switch (res.action) {
            case "Add Employee":
              employee();
              break;
            case "Add Role":
              role();
              break;
            case "Add Department":
              department();
              break;
            case "View All Employees":
              viewEmployees();
              break;
            case "View All Employees By Role":
              viewByRole();
              break;
            case "View All Employees By Department":
              viewByDepartment();
              break;
            case "View All Roles":
              viewRoles();
              break;
            case "View All Departments":
              viewDepartments();
              break;
            case "Update An Employee Role":
              updateEmployee();
              break;
            case "Exit":
              connection.end();
              break;
          }
    });
};
//View functions
// View list of all employees
function viewEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", function (err, res) {
        if (err) throw err

        console.table(res)
        start()
    });
};

// View list of employees by role
function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;

        inquirer.prompt ([
            {
                type: "list",
                name: "role",
                message: "Which Role's Employees would you like to see?",
                choices: function () {
                    let choiceArray = []
                    for (let i = 0; i < res.length; i++) {
                        choiceArray.push(res[i].title)
                    }
                    return choiceArray
                }
            }
        ]).then(function (answer) {
            connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id", function (err, res) {
                let roleArr = []
                for (let i = 0; i < res.length; i++) {
                    if (answer.role === res[i].title) {
                        roleArr.push(res[i])
                    }
                }
                console.table(roleArr);
                start();
            });
        });
    });
};

// View list of employees by department
