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
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
            case "Add Employee":
                employee();
                break;
        }
    });
};
