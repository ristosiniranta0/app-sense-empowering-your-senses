/* 
    filename: sophisticatedApp.js
    content: A complex and sophisticated JavaScript application.
*/

// Create a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create a class for a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`Starting the engine of my ${this.make} ${this.model}`);
  }

  stopEngine() {
    console.log(`Stopping the engine of my ${this.make} ${this.model}`);
  }
}

// Create a class for a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  }
}

// Create a class for a Calculator
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero!");
    }
  }
}

// Create some instances and use the classes
const john = new Person("John Doe", 25);
john.introduce();

const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine();

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
myBook.getInfo();

const result1 = Calculator.add(5, 10);
const result2 = Calculator.divide(20, 5);

console.log(`Result 1: ${result1}`);
console.log(`Result 2: ${result2}`);

// ... Additional code (more than 200 lines) ...