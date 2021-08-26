const Employee = require("./employeeClass");

// github—GitHub username
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

// getGithub()  
  getHub() {
    return this.github;
  }
  
// getRole()—overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}



