const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }
    getname() { return this.name; }
    getEmployeeId() { return this.employeeId; }
    getEmail() { return this.email; }
}
module.exports = Engineer;
