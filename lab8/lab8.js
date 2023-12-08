
//1

let student = {
    firstName: 'Adonay',
    lastName: 'Gebrerufael',
    grades: [],
    
    insertGrade: function(newGrade) {
      this.grades.push(newGrade);
    },
    
    computeAverageGrade: function() {
      let sum = this.grades.reduce((acc, cur) => acc + cur, 0);
      return this.grades.length ? sum / this.grades.length : 0;
    }
};

// Insert grades using the methods defined in the object
student.insertGrade(85);
student.insertGrade(80);
student.insertGrade(75);

// Compute the average grade
let averageGrade = student.computeAverageGrade();
console.log(`Average Grade: ${averageGrade}`);


  //2
  const createStudent = function(firstName, lastName) {
    return {
      firstName,
      lastName,
      grades: [],
      
      insertGrade: function(newGrade) {
        this.grades.push(newGrade);
      },
      
      computeAverageGrade: function() {
        let sum = this.grades.reduce((acc, cur) => acc + cur, 0);
        return this.grades.length ? sum / this.grades.length : 0;
      }
    };
  };

  
  //3
  Array.prototype.mySort = function() {
    return this.sort((a, b) => a - b);
  };

  
//4
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  
  Animal.prototype.run = function(increase) {
    this.speed += increase;
    console.log(`${this.name} runs with the speed of ${this.speed}.`);
  };
  
  Animal.compareBySpeed = function(a1, a2) {
    return a1.speed - a2.speed;
  };
  
  function Rabbit(name, speed) {
    Animal.call(this, name, speed);
  }
  
  Rabbit.prototype = Object.create(Animal.prototype);
  Rabbit.prototype.constructor = Rabbit;
  
  Rabbit.prototype.hide = function() {
    console.log(`${this.name} hides!`);
  };
  
  // Example usage:
  let rabbit = new Rabbit('White Rabbit', 0);
  rabbit.run(3); // White Rabbit runs with the speed of 3.
  rabbit.hide(); // White Rabbit hides!
  

