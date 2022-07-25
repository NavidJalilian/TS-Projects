abstract class Person {
  constructor(private name: string, public age: number) {}
  abstract changeName(name: string): void;
}
class Student extends Person {
  constructor(name: string, age: number, private grades: number) {
    super(name, age);
  }
  changeName(name: string) {
    console.log(name);
  }
}
