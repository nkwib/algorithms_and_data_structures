class Student {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }
  sayHi() {
    return `The student ${this.firstName} ${this.secondName} says Hi!`;
  }
  static enrollStudents() {
    return `ENROLL STUDENTS!`;
  }
}

let first = new Student("gianmaria", "de vincentis");

console.log(first.sayHi());
