// ************************************    Objects And Constructor   *****************************
/*
let car = {
    name : 'jaguar',
    topSpeed : 100,
    run : function () {
        console.log(`car is runnning`);
    },
};
// Creating constructor for easy creation of object;
function CreateCar(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.details = function () {
        console.log(`${name} runs at top speed of ${topSpeed}`);
    }
}

car1 = new CreateCar("bmw", 100);
console.log(car1.name);

*/
// *******************************   Objects and prototypes    ***********************************
/*
function Employee(name, sal, exp) {
    this.name = name;
    this.sal = sal;
    this.exp = exp;
}

Employee.prototype.slogan = function () {
    return `This is the best company ,regards ${this.name}`;
}

let obj = new Employee("harry", 200, 3);
console.log(obj.slogan(), obj.sal);

function programmer(name, sal, exp, language) {
    Employee.call(this, name, sal, exp);
    this.language = language;
}

let obj1 = new programmer("srk", 1, 0, "javascript");
console.log(obj1);

function food(item) {
    this.item = item;
}
function cake(item , flavour){
    food.call(this,item);
    this.flavour = flavour;
}
let mycake = new cake("flour","choclate");
console.log(mycake);
*/


// *******************************   ES6  classes   ***********************************
/*
class Employee{

    constructor(name,exp,division){
        this.name = name;
        this.exp = exp;
        this.division = division;
    }
    slogan() {
        return `I am ${this.name} and this company is the best.`;
    }
    joiningYear(){
        return 2020 - this.exp;
    }

    static add(a,b){ // Static method can be called without creating object of class
        return a+b;
    }

}

class Programmer extends Employee{
    constructor(name ,exp,division,language) {
        super(name,exp,division);
        this.language = language;
    }

    favouriteLanguage(){
        if (this.language.toLowerCase() == "python") {
            return "Python";
        } else {
            return "JavaScript";
        }
    }

    static add(a,b){    // Static method can be called without creating object of class.
        return a%b;
    }

    static multiply(a,b){  // Static method can be called without creating object of class.
        return a+b;
    }
} 

// let obj = new Employee("shah",0,20);
// console.log(obj);
// console.log(obj.slogan());
console.log(Employee.add(1,2));
console.log(Programmer.add(1,2));

let obj = new Programmer("shah",0,20,"Java");
console.log(obj);
console.log(obj.favouriteLanguage());
console.log(Programmer.multiply(2,3));
*/