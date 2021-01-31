//class and constructor in javascript

class student{  //class is like a function
    constructor(id, name){          //constructor is similar to object and it can have parameter like function.
        this.id = id;
        this.nameIs = name;
        this.school = "Saint Phillips";
    }
}

const student1 = new student(12, "Prot");
const student2 = new student(16, "hell");
const student3 = new student(15, "Furious");

console.log(student1, student2, student3);