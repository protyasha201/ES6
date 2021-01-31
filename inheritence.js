// inheritance , extends

class Parent{
    constructor(){
        this.fatherName = "SwitchBurger";
    }
}
class Child extends Parent{
    constructor(name){
        super();      //this line is must to extend Parent Class.this will add Parent classes property and values.
        this.name = name;
    }
    getFullName(){       //this is a method
        return this.name + " " + this.fatherName; //this is how we use function in a constructor.don't use Function key word before function name.
    }
}

const baby = new Child("Prot");
const baby2 = new Child("Tom");

console.log(baby.getFullName());
console.log(baby2);