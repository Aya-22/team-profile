const Employee = require('./employeeClass');

// school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
// getSchool()
getSchool() {
    return this.school;
}

// getRole()—overridden to return 'Intern'
getRole() {
    return 'Intern';
}

}



