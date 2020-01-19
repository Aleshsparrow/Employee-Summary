// Set up the main class(employee class) with some properties and methods
class Employee {
    constructor(name, id, title){
        this.name = name
        this.id = id
        this.title = title
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        
    }
    getRole(){
        return this.title
    }
}

// const newName = new Employee("Alice", 45, "manager")

// console.log(newName.getId())

module.exports = Employee