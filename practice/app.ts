class Person {
  constructor(readonly name: string, public age: number) {}
}
const me = new Person("navid", 4);
console.log(me);
class Student extends Person {
  constructor( name: string, 
    age: number, private grades: number) {
    super(name, age);
  }
}
const st = new Student("ali", 3, 15);
