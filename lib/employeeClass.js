// name, id, email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
// getName() function to show the name of the employee   methods within class 
 getName() {
        // console.log(`Employee Name: ${this.name}`)
        // return name in construcor
        return this.name
    }
// getId() will display the id of the employee, will be link to employee name.
getId() {
    //  console.log(`Employee Id: ${this.id}`);
     return this.id;
 }
// getEmail() will display the employee's email
getEmail() {
    // console.log(`Employee Email: ${this.email}`)
    return this.email
}
// getRole()—returns 'Employee'
getRole() {
    return 'Employee';
}
}

// const employee1 = new Employee ('James', 23, 'email@email1.com')
// console.log(employee1.getName())
// console.log(employee1.getId())
// console.log(employee1.getEmail())
// console.log(employee1.getRole())

module.exports = Employee;









