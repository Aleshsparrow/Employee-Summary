const Employee = require("./Employee")

class Engineer {
    constructor(name, id, title, email, github) {
        this.name = name
        this.id = id
        this.title = title
        this.email = email
        this.github = github
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getRole() {
        return this.title = "Engineer"
    }
    getEmail(){
        return this.email
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer