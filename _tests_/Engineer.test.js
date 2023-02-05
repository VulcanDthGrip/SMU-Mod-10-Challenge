const Engineer = require("../lib/Engineer");

test ("creates a new engineer object", () => {
    const engineer = new Engineer("Ralph", 2, "ralph@email.com","github.com");

    expect(engineer.name).toBe("Ralph");
    expect(engineer.EmployeeId).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    console.log(engineer.github);
});

test ("gets a new Engineer github",  () => {
    const engineer = new Engineer("Ralph", 2, "ralph@email.com");
    expect(engineer.getGitHub()).toEqual(expect.stringContaining("github account"));
});

test("gets a new Engineer's role",  () => {
    const engineer = new Engineer("Ralph", 2, "ralph@email.com");
    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});