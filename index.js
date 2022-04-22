// const fs = require("fs");
const cTable = require('console.table');
const inquirer = require("inquirer");
const { listenerCount } = require('process');
const db = require("./db/connection");


const promptSelection = () => {
  inquirer
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
        ]
      }
    ])
    .then(({ selection }) => {
      if (selection === "view all departments") {
        viewDepartments();
      } else if (selection === "view all roles") {
        viewRoles();
      } else if (selection === "view all employees") {
        viewEmployees();
      } else if (selection === "add a department") {
        promptAddDepartment();
      } else if (selection === "add a role") {
        promptAddRoles();
      } else if (selection === "add an employee role") {
        promptUpdateRoles();
      } else {
        console.log("Thank you and Goodbye!");
        process.quit();
      }
    });
};

const viewDepartments = () => {
  db.query(
    "SELECT * FROM departments;",
    (err, results) => {
      // console.log('Here');
      if(err) throw err;
      console.table(results);
      console.log('\n\n');
      promptSelection();
    }
  )
};


const viewRoles = () => {
  db.query(
    "SELECT * FROM roles;",
    (err, results) => {
      console.table(results);
      console.log('\n\n');
      promptSelection();
    }
  )
};

const viewEmployees = () => {
  db.query(
    `SELECT 
         e.id,
         e.first_name,
         e.last_name,
         r.title,
         d.department_name,
         r.salary,
         CONCAT (e2.first_name, " ",e2.last_name) AS manager, 
    FROM employees e JOIN role r ON e.role;`,  // ask the TAs for help
    
    (err, results) => {
      console.table(results);
      console.log('\n\n');
      promptSelection();
    }
  )
};

const promptAddDepartment = () => {
  inquirer.prompt([{
    type: "input",
    name: "name", 
    message: "Which department would you like to add?",
    validate: departmentName => {
      if (departmentName) {
        return true;
      }else {
        console.log("Must enter your department name!");
        return false;
      }
        
      }
    }
  ])
  .then(name => {
    db.promise().query("INSERT INTO departments SET ?", name);
    viewDepartments();
  })
}

const promptAddRoles = () => {
  return db.promise().query (
    "SELECT department.id, department.name FROM department;"
  )
  .then()  //need help here
} 

inquirer.prompt(
  [{
    type: "input",
    name: "title",
    message: "What is your title? (COMPULSORY)",
    validate: titleName => {S
      if (titleName) {
        return true;
      } else{
        console.log("Must enter your title!");
        return false;
      }
        
      }
    },
    { type: "list",
      name: "department",
      message: "Please select your department",
      chhoices: departmentOptions

    },
    {
      type: "input",
      name: "salary",
      message: "Please enter your salary (COMPULSORY)",
      validate: salary => {
        if(salary) {
          return true;
        } else{
          console.log("Must enter your salary!");
          return false;
        }
      }
    }
  ]
)
.then(({ title, department,salary}) => {
// need help here
"INSERT INTO roles SET?",
{
  title: title,
  department_id: department,
  salary: salary
},
function (err, res){
  if (err) throw err;
}
} //?
}).then(() => selectRoles())
})
}
  }]
)

promptSelection();
