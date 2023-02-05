const Employee= require('../lib/Employee')


// Function to test the object constructor
test("create an employee object", () => {
    const employee = new Employee("Billy", 1, "billy@email.com");
    
    expect(employee.name).toBe("Billy");
    expect(employee.EmployeeId).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe("Manager");
});

// Function to test get name of employee
test("get name of employee", () => {
    const employee = new Employee("Billy", 1, "billy@email.com");
    expect(employee.getName()).toEqual(expect.any(String));
});

// Function to test get id of employee
test("get the id of employee", () => {
    const employee = new Employee("Billy", 1, "billy@email.com");
    expect(employee.getEmployeeId()).toEqual(expect.any(Number));
});

// Function to test get email of employee
test("get the email of the employee", () => {
    const employee = new Employee("Billy", 1, "billy@email.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining("billy@email.com"));
});

// Function to test get the role of employee
test("get the role of the employee", () => {
    const employee = new Employee("Billy", 1, "billy@email.com");
    expect (employee.getRole()).toBe(expect.stringContaining("Manager"));
});