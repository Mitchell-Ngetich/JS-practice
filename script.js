'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car
 (called EV) as a CHILD "class" of Car. Besides a make and
  current speed, the EV also has the current battery charge
   in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument
 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the
 car's speed by 20, and decrease the charge by 1%. Then log 
 a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 
'accelerate', 'brake' and 'chargeBattery' (charge to 90%). 
Notice what happens when you 'accelerate'! HINT: Review the 
definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

//constructor function we use const = xyz
// const Car = function(speed, make) { 
//    this.speed = speed;
//    this.make = make;
// }

// Car.prototype.accelerate = function(){
//    this.speed += 20
//    console.log(`${this.make} going at ${this.speed} km/h`)
// }
// Car.prototype.brake = function(){
//    this.speed -= 5;
//    console.log(`${this.make} going at ${this.speed} km/h`)
// }

// const EV = function(speed, make, charge){
//    Car.call(this, speed, make);
//       this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//    this.charge  = chargeTo;
//  }

//  EV.prototype.accelerate = function(){
//    this.speed += 20;
//    this.charge -= 1 // or this.charge --;
//    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}`)
//  }


// const tesla = new EV(120, "Tesla", 23)
// tesla.chargeBattery(90)
// console.log(tesla);
// tesla.accelerate()
// tesla.brake()
// tesla.chargeBattery()


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


// Using constructor functions
// const Person = function(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear
// };

// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear)
// }

// const Student = function(firstName, birthYear, course){
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }

// //linking student instance to person so that they can inherit person properties.
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduction = function(){
//     console.log(`My name is ${this.firstName} and I am doing ${this.course}`)
// }
// const mike = new Student("Mike", 2020, "Computer Science")
// mike.introduction()
// const mitch = new Student("Mitch", 2001, "Computer Science")
// mitch.introduction()
// console.log(mitch)
// mitch.calcAge(); //won't work unless i extend to inherit from person object.


// Classes in EX6

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
//     get  fullName(){
//         return this._fullName
//     }

//     set fullName(name){
//         if (name.includes(" ")) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }
   


//     //static methods(cannot be inherited by the instances)
//     static hey(){
//         console.log("Hey there ✋")
//     } //cannot be inherited by the instances.
// }

// class Student extends Person {
//     constructor(fullName, birthYear, course, studentId){
//     super(fullName, birthYear);
//     this.course = course;
//     this.studentId = studentId;
//     }


// introduce(){
//     console.log(`my name is ${this.fullName} and i'm doing ${this.course}. my age is ${2023 - this.birthYear}`)
// }
// }

// const mercy = new Student("Mercy Kibet", 2001, "engineering", 1226);
// console.log(mercy.age)
// console.log(mercy.fullName)
// mercy.birthYear = 2012;  //setter is called and sets the birthYear to 2010
// console.log(mercy.age)
// mercy.introduce()

//using object.create
// const Person = {
//     calcAge(){
//         console.log(2023 - this.birthYear);
//     },

//     init(firstName, birthYear){
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//     }
// }
// // const steven = Object.create(Person);

// const Student = Object.create(Person);
// Student.init = function(firstName, birthYear, course){
//     Person.init.call(this, firstName, birthYear)
//     this.course = course;
// }

// Student.introduce = function (){
//     console.log(`my name is ${this.firstName} and i'm pursuing ${this.course}`)
// }

// const jay = Object.create(Student);

// jay.init("Jay", 2012, "Maritime")
// console.log(jay)
// jay.introduce()
// // jay.calcAge()
// console.log(jay.birthYear)
// jay.calcAge()




class Account {
   // 1) Public fields(available in all instances)
   locale = navigator.language;

   // 2) Private fields(uses # cannot be accessed outside class)(instances)
   #movements = [];
   #pin;

   constructor(owner, currency, pin){
      this.owner = owner;
      this.currency = currency;
      //protected fields - should not be accessed  from outside(encapsulation)
      this.#pin = pin;
      // this._movements = [];
      // this.locale = navigator.language;

      console.log(`Thank you for opening an account ${this.owner}`)
   }

   //public interface
   // 3) public methods

   getMovements(){
      return this.#movements;
   }

   deposit(value){
      this.#movements.push(value);
      return this;
   }

   withdraw(value){
      this.deposit(-value);
      return this;
   }
 
   requestLoan(value){
      if(this.#approvedLoan(value)){
         this.deposit(value);
         return this;
      }
   }

   // 4) private methods
   #approvedLoan(value){
      return true
      // for private methods we call them on public methods so that we can access them ouside class

   }

   callApprovedLoan(){
     return this.#approvedLoan() 
     // should have a return statement. 
   
   }
  

}

const acc1 = new Account("Jonas", "EUR", 1111)
console.log(acc1)
acc1.deposit(200)
acc1.withdraw(140)
console.log(acc1.callApprovedLoan())
// console.log(acc1.#pin) => also gives an error
// console.log(acc1.#movements)// gives an error coz its a private field

//chaining Methods
acc1.deposit(2000).deposit(140).withdraw(140).requestLoan(2000).withdraw(2200)

// we should return this in deposit, withdraw and requestLoan so that
//it doesn't return undefined
console.log(acc1.getMovements())