class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hi, I am ${this.name}`);
    }
}
//--------------------------------------------


class Student extends Person {
    study(){
        console.log(`${this.name}, is studying `);
    }
}

const person1 = new Person("Jeremy", 20);
const student = new Student("Jerem", 20);

person1.sayHello();
student.sayHello();
student.study();