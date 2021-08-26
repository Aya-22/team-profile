const Employee = require('./employeeClass')
// officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
  // getRole()—overridden to return 'Manager'  
    getRole(){
        return 'Manager';
    }
    
}

const employeeType = new Manager ('Tony', 3, 'email@email2.com', 4);

console.log(employeeType.getRole());
console.log(employeeType.officeNumber)





