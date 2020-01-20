const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const teamMeambers = [];

const idArray = [];

function appMenu() {

    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
            {
            type: "input",
            name: "managerName",
            Message: "what is your manager's name?",
            validate: answer => {
                if (answer !== ""){
                    return true;
                }
                return "please enter at one character.";
            }
        },
        {
            type: "input",
            name: "managerId",
            Message: "what is your manager's id number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "please enter a number greater than zero.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            Message: "what is your manager's email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            },
            type: "input",
            name: "managerOfficeNumber",
            Message: "what is your manager's office number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid number";
            }
        }
        ]).then(answers => {
            const manager = new Manager(answer.managerName, answers.managerId, answers.managerOfficeNumber);
            teamMeambers.join.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                Message: "Which type of team mamber would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't esnt to add anymore team members"
                ]
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                case "intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                Message: "what is your engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter manager's name";
                }
            },
            {
                type: "input",
                name: "engineerId",
                Message: "what is your engineer's id number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return "This ID is already taken. enter a different number";
                        }else {
                            return true;
                        }
                    }
                    return "please enter a valid number.";
                }
                
            },
            {
                type: "input",
                name: "engineerEmail",
                Message: "what is your engineer's email?",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                Message: "what is your engineer's Github username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter engineer's github username";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMeambers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                Message: "what is your intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an intern's name";
                }
            },
            {
                type: "input",
                name: "internId",
                Message: "what is your intern's id number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        if (idArray.includes(answers)) {
                            return "This Id is already in use, enter a different number"
                        }else {
                            return true;
                        }
                    }
                    return "Please enter a valid number.";
                }
            },
            {
            type: "input",
            name: "internEmail",
            Message: "what is your intern's email address?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
            
        },
        {
            type: "input",
            name: "internSchool",
            Message: "what is your intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid school name.";
            }
        }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMembers.push(intern);
            idArray.push(answers.internId);
        });
    }

    function buildTeam() {
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();

}

appMenu();