import { Employee } from "./Employee.js";

export class Programmer extends Employee {
    constructor(name, age, salary, lang) {
      super(name, age, salary);
      this._lang = lang;
    }
  
    get salary() {
      return super.salary * 3;
    }
  
    get lang() {
      return this._lang;
    }
  
    set lang(value) {
      this._lang = value;
    }
  }