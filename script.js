// 'use strict';

// const booking = [];
// // Default parameters when you assign the values
// function flight(flightNumber, numPassenger = 3, price = 200 ){
//   const bookingObj = {
//     flightNumber,
//     numPassenger,
//     price,
//   };
//   console.log(bookingObj);
// }
// flight("B123")
// flight("B123", "3", "300")
// flight("B123", "10", 400)

// const myFlight = "LF123";
// const me = {
//     name: "Mitchell",
//     id: 34647854,
//     age: 25
// }

// function mine (flightNum, passenger){
//     flightNum = "LH575";
//     passenger.name = "Ms " + passenger.name
// }
// mine(myFlight, me);
// console.log(myFlight)
// console.log(me)

// function myFunction(str){
//     return str.replaceAll(" ", " ").toLowerCase();
// }

// function second(str) {
//     const [first, ...others] = str.split(" ");
//     return [first.toUpperCase(), ...others].join(" ")
// }

// function practice (str){
//     return str.replaceAll("e", "uT").toUpperCase()
// }

// // Higher-order functions

// function higherOrder(str, fn){
//   console.log(`${fn(str)}`)
//   console.log(`${fn.name}`)
// }
// higherOrder("Javascript is the best programming language", myFunction);
// higherOrder("Javascript is the best programming language", second);
// higherOrder("Javascript is the best programming language", practice);

// const greet = (greeting) => (name) => console.log(`${greeting}, ${name}`)
// const greeting = greet("Hello")
// greeting("Mitchell")

// function greetMe(greeting){
//     return function (name) {
//         console.log(`${greeting}, ${name}`)
//     }
// }
// /*when we assign a variable, it acts as a fuction i.e
// sayHello now becames a function */
// const sayHello = greetMe("Hi")
// sayHello("Ngetich")
// // 2nd way
// greetMe("Anyo")("Wang Yibo")


const object1 = {
    airline: "Kenya Airways",
    iataCode: "KQ",
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} with the code ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.airline}, ${flightNum}, ${name}`})

    }
}
 console.log(object1)
 object1.book("234", "Mitchell")

 const object2 = {
    airline: "Ethiopian Airway",
    iataCode: "EU",
    bookings: []
 }
//  accepts an comma
const practise = object1.book
practise.call(object2, 386, "Purity" )
// Accepts an array
practise.apply(object2, [400, "Yang Yang"])
// accepts a variable then call the variable as a function
const myBind = practise.bind(object2, 516)
myBind("Jeff Satur") // you can also call the function with arguments

// ADD EVENTHANDLERS
object1.planes = 300;
object1.buyPlane= function(){
    console.log(this)
    this.planes++;
}
object1.buyPlane()
// if i use bind without the object as parameter, it will give windows object
// we must always add parameter to bind since it creates a new object
document.querySelector(".buy").addEventListener("click", object1.buyPlane.bind(object1))