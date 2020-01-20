const Employee = require ("./Employee")

class Manager {
        constructor(name, id, title, email, officeNumber) {
            this.name = name
            this.id = id
            this.title = title
            this.email = email
            this.officeNumber = officeNumber
        }
        getName(){
            return this.name
        }
        getId(){
            return this.id
        }
        getRole() {
            return this.title = "Manager"
        }
        getEmail(){
            return this.email
        }
        getOfficeNumber() {
            return this.officeNumber
        }
}
// const person = new Manager("Sheggy", 3, "Manager", "ddd@gmail.com", 90909090)
// console.log(person)
module.exports = Manager