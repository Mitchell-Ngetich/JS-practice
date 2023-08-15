'use strict';

///////////////////////////////////////


// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current 
speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed
 in mi/h (but converts it to km/h before storing the value, 
 by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and 
brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Challenge {
//     constructor(make, speed){
//        this.make = make;
//         this.speed = speed;
//     }
//     accelerate(){
//         this.speed += 10; 
//         console.log(`${this.make} has a speed of ${this.speed}`)
//     }

//     brake(){
//         this.speed -= 5;
//         console.log(`${this.make} has a speed of ${this.speed}`)
//     }

//     get speedUS(){
//         return this.speed / 1.6;
//     }
//     set speedUS(speed){
//         this.speed = speed * 1.6
//     }
// }

// const ford = new Challenge("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 60;
// console.log(ford)
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has 
a make and a speed property. The speed property is the current
 speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the 
car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's 
speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 
'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

*/
// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed
// }
// Car.prototype.accelerate = function(){
//     //* we use this keyword to refer to the object that was called on 
//     //* in this case bmw.speed or merc.speed
//    this.speed += 10;
//    console.log(`${this.make} ${this.speed}`)
// }
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} ${this.speed}`)

// }

// const bmw = new Car("BMW", 120)
// const merc = new Car("Mercedes", 95)

// merc.accelerate();
// merc.accelerate();
// merc.accelerate();
// merc.brake()
// merc.brake()
// merc.brake()
// bmw.accelerate()
// merc.accelerate();

// bmw.brake()


// function Person(firstName, birthYear){
//   this.firstName = firstName;
//   this.birthYear = birthYear
// }

// const mitch = new Person("Mitchell", 1997)
// console.log(mitch)

// const joy = new Person("Joy", 2015)
// console.log(joy)
// const pepe = new Person("Pepe Nehema", 2014)
// console.log(pepe)

// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear)
// }

// mitch.calcAge()
// joy.calcAge()
// pepe.calcAge()


// //although it is not recommended when building large application
// const arr = [3, 4, 4, 4, 5, 7]
// Array.prototype.unique = function(){
//     return [...new Set(this)]
// }

// console.log(arr.unique())

//Classes in EX6

// class Person{
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear
//     }

//     //inherited by the instances
//     calcAge(){
//         console.log(2023 - this.birthYear)
//     }
//     hobby(){
//         console.log(`${this.fullName} loves watching`)
//     }
//     get age(){
//         return 2023 - this.birthYear
//     }

//     //set a property that already exists.
//     set fullName(name){
//         console.log(name)
//         if (name.includes(" ")) this._fullname = name;
//         else alert(`${name} is not a full name`)
//     }
//     get  fullName(){
//         return this._fullName
//     }

//     //static methods(cannot be inherited by the instances)
//     static hey(){
//         console.log("Hey there ✋")
//     }
// }

// Person.hey();
// const pepe = new Person("Nehema Jerube", 2014);
// // pepe.hey()//will throw an error coz its a static method


// const mitch = new Person("Mitchell Ngetich", 1997);
// console.log(mitch._name)

// const joy = new Person("Joy Chumba", 2015)
// console.log(joy)


// const mitch = new Person("Mitchell", 1997);
// const joy = new Person("Joy", 2015)
// console.log(joy)
// joy.hobby()
// console.log(mitch)
// mitch.calcAge()
// mitch.hobby()
// console.log(mitch.__proto__ === Person.prototype)
/*this returns true because the mitch object inherits
 *its properties and methods from the Person.prototype object.
 *Since mitch.__proto__ and Person.prototype both point to the same object, 
 *the expression mitch.__proto__ === Person.prototype evaluates to true. */

 //1. Classes cannot be hoisted
 //2. Classes are executed in strict mode
 //3.Classes are first class citizens

 //Setters and Getters
//  const account = {
//     owner: "Mitch",
//     movements: [200, 530, 120, 300],

//     get latest(){
//         return this.movements.slice(-1).pop()
//     }
//  }

//  console.log(account.latest)
//  console.log(account.movements)

// const PersonProto = {
    
//     calcAge(){
//         console.log(2023 - this.birthYear)
//     } 
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear
//     }
// };
// const fancy = Object.create(PersonProto);
// fancy.name = "Fancy";
// fancy.birthYear = 2001;
// fancy.calcAge();

// const patty = Object.create(PersonProto);

// const PersonClass = {
//     calcAge(){
//         console.log(2023 - this.birthYear)
//     },
//     //instead of using mitch.name here which is not dry
//     //we can use function can can do better
//     myFunction(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear
//     }
// }
// const mitch = Object.create(PersonClass);
// mitch.name = "Mitch";
// mitch.birthYear = 1997;
// mitch.calcAge()
// console.log(mitch)
// const sara = Object.create(PersonClass);
// sara.myFunction("Sara", 1990)
// console.log(sara)
// sara.calcAge()

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear
};

Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear)
}

const student = function(firstName, birthYear, course){
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
}
const mike = new Student("Mike", 2020, "Computer Science")
console.log(mike)