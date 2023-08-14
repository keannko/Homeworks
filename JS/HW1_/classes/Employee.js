export class Employee {
    constructor(name, age, salary) {
      this._name = name;
      this._age = age;
      this._salary = salary;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      this._age = value;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(value) {
      this._salary = value;
    }
  }