 'use strict';

 // Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an 
event listener that changes the color of the selected h1 element 
('header') to blue, each time the BODY element is clicked. Do NOT 
select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! 
Take all the time you need. Think about WHEN exactly the callback function
 is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
   document.querySelector("body").addEventListener("click", function(){
    header.style.color = "blue"
   })
});

 // Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from
 which people can choose, and an array with the 
 number of replies for each option. This data is 
 stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' 
on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to
   input the number of the selected option. The 
   prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. 
  For example, if the option is 3, increase the value AT 
  POSITION 3 of the array by 1. Make sure to check if the 
  input is a number and if the number makes sense 
  (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results.
 The method takes a string as an input (called 'type'), which can be
  either 'string' or 'array'. If type is 'array', simply display the 
  results array as it is, using console.log(). This should be the default
   option. If type is 'string', display a string like "Poll results are 
   13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' 
method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
let count = 0;
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const promptMessage = `${this.question}\n${this.options.join("\n")}\n(Write option number)`;
     const answer = prompt(promptMessage);
   
     typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
     console.log(this.answers)
    }
}
 poll.registerNewAnswer()

// CLOSURES
// function secureBooking(){
//   let passengerCount = 0;
//   return function (){
//     passengerCount++;
//     console.log(`${passengerCount} total members`)
//   }
// }
//  const book = secureBooking()
//  the book now becomes a function
// if you console.log, it will dispaly the content of the function
// so instead you store them in a variable
//  book()
//  book()
//  book()
//  book()
//  book()

//  let f;

//  function g(){
//   const x = 12;
//    f = function (){
//     console.log(x * 3)
//    }
//  }
// g();
// f() //> 36

// function y(){
//   const a = 356;
//   f = function (){
//     console.log(a * 2)/*if i put x instead of a, 
//     it will throw an error because it doesn't access x
// */
//    }
// }
// y()
// f() //> 712

// function bordingPssenger(n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function(){
//     console.log(`we will be boarding all the ${n} passengers`);
//     console.log(`There are 3 groups each with ${perGroup} members`)
//   }, wait * 0);
//   console.log(`Will start boarding in ${wait} seconds`)
// };

// bordingPssenger(360, 2)
/*will start...message is executed first because of asynch JS, even if
timeout is 0,It's important to note that even with a 0 delay, 
the setTimeout callback function is still executed asynchronously, 
meaning it will be scheduled to run separately from the normal execution
 flow of the code */

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


// const object1 = {
//     airline: "Kenya Airways",
//     iataCode: "KQ",
//     bookings: [],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} with the code ${this.iataCode}${flightNum}`)
//         this.bookings.push({flight: `${this.airline}, ${flightNum}, ${name}`})

//     }
// }
//  console.log(object1)
//  object1.book("234", "Mitchell")

//  const object2 = {
//     airline: "Ethiopian Airway",
//     iataCode: "EU",
//     bookings: []
//  }
// //  accepts an comma
// const practise = object1.book
// practise.call(object2, 386, "Purity" )
// // Accepts an array
// practise.apply(object2, [400, "Yang Yang"])
// // accepts a variable then call the variable as a function
// const myBind = practise.bind(object2, 516)
// myBind("Jeff Satur") // you can also call the function with arguments

// // ADD EVENTHANDLERS
// object1.planes = 300;
// object1.buyPlane= function(){
//     console.log(this)
//     this.planes++;
// }
// object1.buyPlane()
// // if i use bind without the object as parameter, it will give windows object
// // we must always add parameter to bind since it creates a new object
// document.querySelector(".buy").addEventListener("click", object1.buyPlane.bind(object1))

// function addTax(rate, value) {
//     return value + value * rate;
// }
// console.log(addTax(0.1, 200))
// const addVAT = addTax.bind(null, 0.23)
// console.log(addVAT(1000))
// console.log(addVAT(100))

// //function calling another function
// function greetings(){
//     return "Welcome home"
// }
// function returnFun(greet, name){
//     return `${greetings()}, ${greet} ${name}`;
// }

// console.log(returnFun("anyo", "kim tahyun"))

// function myFun(num){
//     return function(value){
//         return num / value;
//     }
// }
// //function returning a function
// const myFun2 = myFun(1250)
// console.log(myFun2(10))
// console.log(myFun2(18))
// console.log(myFun2(23))