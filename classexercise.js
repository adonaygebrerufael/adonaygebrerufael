class Employee {
    static #counter = 0;
  
    #fullname;
    salary;
    constructor(fullname, salary) {
      this.#fullname = fullname;
      this.salary = salary;
      Employee.#increment();
    }
  
    static #increment() {
      Employee.#counter ++;
    }
  
    static getCounter() {
      return Employee.#counter;
    }
  
    getName() {
      return this.#fullname;
    }
  
    setName(name) {
      this.#fullname = name;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  class Manager extends Employee {
    bonus;
  
    constructor(fullname, salary, bonus) {
      super(fullname, salary);
      this.bonus = bonus;
    }
  
    calcSalary() {
      return this.getSalary() + this.bonus;
    }
  }
  
  // Usage
  // 1. Implement those using OOP.
  // Assuming the comment means to create instances of these classes:
  
  // Create 3 objects for each class
  let employee1 = new Employee('John Doe', 50000);
  let employee2 = new Employee('Jane Smith', 60000);
  let employee3 = new Employee('Emily Davis', 55000);
  
  let manager1 = new Manager('Sam Johnson', 80000, 5000);
  let manager2 = new Manager('Chris Lee', 85000, 7000);
  let manager3 = new Manager('Alex Taylor', 90000, 6000);
  
  // 2. Test methods inc.
  // Assuming the comment means to demonstrate using the methods:
  
  console.log(employee1.getName()); // Outputs: John Doe
  employee1.setName('John A. Doe');
  console.log(employee1.getName()); // Outputs: John A. Doe
  
  console.log(manager1.calcSalary()); // Outputs: 85000 (80000 + 5000)
  
  // Draw the prototypical
  // Assuming the comment means to illustrate the prototype chain:
  console.log(employee1 instanceof Employee); // true
  console.log(manager1 instanceof Manager); // true
  console.log(manager1 instanceof Employee); // true, because Manager extends Employee
  
  console.log(Employee.getCounter()); // Outputs: 6 (since we created 6 instances)
  
  console.log("Welcome to Programiz!");