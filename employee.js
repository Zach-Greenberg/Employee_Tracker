const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

//connect to MySQL
const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "@BatZinc2020",
    database: "employee_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});