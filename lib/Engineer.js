const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, employeeId, email, github) {
        super(name, employeeId, email, github);
        this.role = "Engineer";
    }
    getname() { return this.name; }
    getEmployeeId() { return this.employeeId }
    getGitHub() { return this.github }
    getEmail() { return this.email }
    getRole() { return "Engineer"; }
}
module.exports = Engineer;