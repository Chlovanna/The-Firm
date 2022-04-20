const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const promptSelection = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a depeartment",
          "add a role",
          "add an employee",
          "update an employee role",
          "Thank you and Goodbye!",
        ],
      },
    ])
    .then(({ selection }) => {
      if (selection === "view all departments") {
        viewDepartments();
      } else if (selection === "view all roles") {
        viewRoles();
      } else if (selection === "view all employees") {
        viewEmployees();
      } else if (selection === "add a department") {
        addDepartment();
      } else if (selection === "add a role") {
        addRoles();
      } else if (selection === "add an employee role") {
        viewRoles();
      } else {
        console.log("Thank you and Goodbye!");
        process.goodbye();
      }
    });
};

con

promptSelection();
