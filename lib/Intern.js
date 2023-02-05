class Intern extends Employee{
    constructor (name, employeeId, email, school) {
        this.name = name;
        this.employeeId = employeeId;
        this.school = school;
        this.email = email;
    }
    getname() { return this.name; }
    getEmployeeId() { return this.employeeId; }
    getSchool() { return this.school; }
    getEmail() { return this.email; }
    getRole() { return "Intern"; }
}
module.exports = Intern;