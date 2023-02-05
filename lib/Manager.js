class Manager extends Employee{
    constructor (name, employeeId, email, officeNumber ) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }
    getname() { return this.name; }
    getEmployeeId() { return this.employeeId; }
    getEmail() { return this.email; }
    getOfficeNumber() { return this.officeNumber; }
    getRole() {return "Manager"; }
}
module.exports = Manager;