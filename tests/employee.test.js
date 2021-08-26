const Employee = require("../lib/employeeClass");

describe("Employee", () => {
  it("should return the employee's name", () => {
    const emName = "Janet";
    const result = new Employee("Janet");

    expect(result.name).toEqual(emName);
  });

  it("should return the employee's id", () => {
    const emId = 5;
    const result = new Employee("Janet", 5);

    expect(result.id).toEqual(emId);
  });
  
  it("should return the employee's email", () => {
    const emEmail = "email@email.com";
    const result = new Employee("Janet", 5, "email@email.com");

    expect(result.email).toEqual(emEmail);
  });
  //    it("should return the employee's id", () => {
  //     const emId = 5;
  //     const result = new Employee("Janet", 5);

  //     expect(result.id).toEqual(emId)
  //    })
});
