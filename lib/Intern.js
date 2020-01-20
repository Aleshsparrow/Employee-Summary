const Employee = require ("./Employee")

class Intern {
    constructor(name, id, title, email, school) {
            this.name = name
            this.id = id
            this.title = title
            this.email = email
            this.school = school
        }
        getName(){
            return this.name
        }
        getId(){
            return this.id
        }
        getRole() {
            return this.title = "Intern"
        }
        getEmail(){
            return this.email
        }
        getSchool() {
            return this.school
        }
}

module.exports = Intern