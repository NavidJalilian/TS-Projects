"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const me = new Person("navid", 4);
console.log(me);
    class Student extends Person {
        constructor(name, age, grades) {
            super(name, age);
            this.grades = grades;
        }
    }
const st = new Student("ali", 3, 15);
