'use strict';

///////////////////////////////////////
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
//     //* we use this keyword to refer to the object that was calle on 
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

class Person{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }
    calcAge(){
        console.log(2023 - this.birthYear)
    }
    hobby(){
        console.log("Watching")
    }
}

const mitch = new Person("Mitchell", 1997);
const joy = new Person("Joy", 2015)
console.log(joy)
joy.hobby()
console.log(mitch)
mitch.calcAge()
mitch.hobby()
console.log(mitch.__proto__ === Person.prototype)
/*this returns true because the mitch object inherits
 *its properties and methods from the Person.prototype object.
 *Since mitch.__proto__ and Person.prototype both point to the same object, 
 *the expression mitch.__proto__ === Person.prototype evaluates to true. */