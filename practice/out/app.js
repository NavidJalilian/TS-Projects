"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, grades) {
        super(name, age);
        this.grades = grades;
    }
    changeName(name) {
        console.log(name);
    }
}
