'use strict';

const getCode = str => str.slice(0,3).toUpperCase();
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  for (const flight of flights.split("+")){
    const [type, from, to, time]  = flight.split(";")
    // console.log(type, from, to, time)

    const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll("_", " ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(44)
    console.log(output);
  }
  
  // 🔴 Delayed Departure from FAO to TXL (11h25)
  //              Arrival from BRU to FAO (11h45)
  //   🔴 Delayed Arrival from HEL to FAO (12h05)
  //            Departure from FAO to LIS (12h30)
  
// Code Challenge 4

/*Write a program that receives a list of variable
 names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into 
the DOM (see code below), and conversion will happen 
when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 
words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you
 have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the 
solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");
btn.addEventListener("click", function(){
  const text = document.querySelector("textarea").value;
  console.log(text);
  // adds a new line to each sentence
  const row = text.split("\n")
  // console.log(row);
  for(const [i, r]of row.entries()){
    // convert to lowercase, remove whitespaces, then split with _
    const [first, second] = r.toLowerCase().trim().split("_");
  /* after split, it will output two names, destructure the variable
  to 1st, 2nd then replace [0] with capital letter, will remove space*/ 
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(output);
    /*add the same length of 20, then repeat emoji according to each index */
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)

  }
  
  // return event.replaceAll(_([a-z]), function(match, letter){
  //   return letter.toUpperCase()
  // })
})
 

// STRINGS
// const airline = "Kenya Airways";
// console.log(airline[4]);
// console.log(airline.indexOf("A"))
// console.log(airline.slice(3, 7))
// console.log(airline.slice(0, airline.indexOf(" ")))
// // latIndexOf will extract the last part from where you specified
// console.log(airline.slice(airline.lastIndexOf(" ") + 1))
// function checkSeat(seat){
//   const s = seat.slice(-1)

//   if(s === "B" || s === "E") console.log("the middle seat");
//   else console.log("you got lucky")
// } 
// checkSeat("11B")
// checkSeat("23C")
// checkSeat("BE")
// // first convert everything to lowercase
// const myName = "MItChelL" // change to Mitchell
// const nameLower = myName.toLocaleLowerCase()
// const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1)
// console.log(nameCorrect);
// const email = "hello@mitchell.com"
// const loginEmail = "  Hello@mitchell.com  \n"

// // .trim() removes the white spaces
// const correctedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(correctedEmail)

// const priceGB = "234,67&";
// const priceUS = priceGB.replace("&", "$").replace(",", ".")
// console.log(priceUS)
// const trying = "I am coming home soon, I love home"
// const trying1 = trying.replace("home", "house");
// console.log(trying1)

// function myBag(items){
//   const bags = items.toLocaleLowerCase();
//   if(bags.includes("tools") || bags.includes("drugs")){
//     console.log("You are not allowed here")
//   } else {
//     console.log("welcome to our school")
//   }
// }

// myBag("This is my clothes")
// myBag("This is my snacks")
// myBag("This is my tools")
// myBag("This is my drugs")

// function checkCapital(name){
//   const names = name.split(" ");
//   const namesCorrect = [];

//   for(const n of names){
//     namesCorrect.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesCorrect.join(" "));
// }
// checkCapital("mitchell jepser ngetich");
// checkCapital("fancy jeruto ngetich");
// checkCapital("purity kibet jeroo");

// const names = "mitchell+ngetich";
// const name2 = names.split('+');
// console.log(name2)

// function creditCard(number){
//  const card = number + "";
//  const last = card.slice(-4);
//  return last.padStart(card.length, "*");
// }
// console.log(creditCard(82216384))
// console.log(creditCard(54739347489393))
// console.log(creditCard(457392017173))

// const airPort = "Due to bad weather....flights are cancelled....";
// console.log(airPort.repeat(4))

// function planeDelay(num){
//   console.log(`All ${num} planes are delayed ${"✈️".repeat(num)}`)
// }
// planeDelay(5);
// planeDelay(7);
// planeDelay(3);
// planeDelay(12);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time,
we have a map with a log of the events that happened during
the game. The values are the events themselves, and the keys
are the minutes in which each event happened (a football game
has 90 minutes plus some extra time).*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

/*1. Create an array 'events' of the different game events 
that happened (no duplicates)
Use set*/
// const events = [...new Set(gameEvents.values())];
// console.log(events);

/*2. After the game has finished, is was found that the yellow 
card from minute 64 was unfair. So remove this event from the game events log.*/
// gameEvents.delete(64);
// console.log(gameEvents);
/*3. Print the following string to the console: "An event happened,
 on average, every 9 minutes" (keep in mind that a game has 90 minutes)*/
//    const totalTime = 90;
//    const eventSize = gameEvents.size;
//  for (const [key, value] of gameEvents){
//   const average = totalTime / eventSize;
//   console.log(`An event ${value} happened on average, every ${average} minutes`)
//  }

/*4. Loop over the events and log them to the console, marking whether i
t's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

// for(const [key, value] of gameEvents){
//   const duration = key <= 45? "FIRST" : "SECOND";
//   console.log(`[${duration} HALF] ${key}: ${value}`)
// }
// // create a new array and push to each one
// const firstH = [];
// const secondH = [];

// for(const [key, value] of gameEvents){
//   const newArray = key <= 45 ? firstH : secondH;
//   newArray.push(`${key}: ${value}`)
// }

// console.log(firstH);
// console.log(secondH)



// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one 
array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array
('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names 
(NOT an array) and prints each of them to the console, along with the number of goals 
that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

GOOD LUCK 😀

*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Code challenge 2
// /* 
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each
//  player name to the console, along with the goal 
//  number (Example: "Goal 1: Lewandowski")
// */
// const goals = game.scored;
// console.log(goals);
//   for (const [i, player] of goals.entries()){
//     console.log(`Goal ${i + 1}: ${player}`)
//   }
// /*2. Use a loop to calculate the average odd and 
// log it to the console (We already studied how to 
//   calculate averages, you can go check if you don't remember)*/
//   const average = Object.values(game.odds)
//   console.log(average)
//   let sum = 0;
//   let count = 0;
//   for(const odd of average){
//     sum += odd;
//     count ++
//   }
//   console.log(count)
//   const calcAverage = count > 0 ? sum / count : "Sum is less than 1";
//   console.log(calcAverage);

// /*3. Print the 3 odds to the console, but in a nice 
// formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object,
//  don't hardcode them (except for "draw"). 
//  HINT: Note how the odds and the game objects 
//  have the same property names 😉 */
//  const teams = Object.entries(game.odds);
//  console.log(teams)
//  for( const [team, odd] of teams){
//   const teamName = team === "x" ? "draw" : `victory ${game[team]}`
//   console.log(`Odd of ${teamName}: ${odd}`)
//  }
// /*BONUS: Create an object called 'scorers' which contains the 
// names of the players who scored as properties, and the number of 
// goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// */
// const scorers = {}
// // loop through the array of scored then add them to scorers obj
// for (const player of game.scored){
//   scorers[player]? scorers[player]++ : (scorers[player] = 1)
// }
// console.log(scorers);

// // SETS

// const orderSet = new Set(["beef", "mutton", "beef", "beef", "pork", "backon"]);
// console.log(orderSet)
// console.log(new Set("Mitchel").size)
// console.log(orderSet.size)
// // same as include method
// console.log(orderSet.has("beef"))
// console.log(orderSet.has("ugali"))
// orderSet.add("drum stick")
// orderSet.delete("beef")
// console.log(orderSet)

// for (const order of orderSet) console.log(order)

// const orders = ["meat","pine", "avo", "man", "meet", "ban"]
// // changing set into an array
// const ordersNew = [...new Set(orders)]
// console.log(ordersNew)

// // MAPS
// const myMap = new Map();
// myMap.set("name", "Rooftop Restaurant").set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set("location", "Kiserian")
// console.log(myMap);
// // to retrieve the values we use get method
// console.log(myMap.get("name"))
// // you can also use map in DOM manipulation
// myMap.set(document.querySelector("h1"), "heading");

// // We can use array to build map instead of using set

// const myMap1 = new Map([
//   ["question", "what is your favourite programming language"],
//   [1, "Ruby"],
//   [2, "JavaScript"],
//   [3, "Python"],
//   ["correct", 1],
//   [true, 'correct'],
//   [false, "Try again"]
// ])
// console.log(myMap1)
// console.log(myMap1.get("question"))
// for (const [key, value] of myMap1){
//   if(typeof key === "number"){
//     console.log(`Answer ${key}: ${value}`)
//   }
// }
// // const answer = Number(prompt("Your answer"))
// // if(answer === 1){
// //   console.log(true)
// // } else {
// //   console.log(false)
// // }
// /*the inner get() is used to retrieve "correct" which will get value 1
// and is compared to answer which will give true or false,
// however we want to get the values associated with the true or false
// so we use another(outer get() which will now get the values i.e correct & Try again) */
// console.log(myMap1.get(myMap1.get("correct") === answer))


// // const [players1, players2] = game.players;
// // console.log(players1, players2);
// // const [gk, ...fieldPlayers] = players1 //rest operator
// // console.log(gk, fieldPlayers);

// // const allPlayers = [...players1, ...players2]
// // console.log(allPlayers);
// // const playersFinal = [...players1,'Thiago', 'Coutinho','Perisic' ]
// // console.log(playersFinal);

// // const {team1, x: draw, team2} = game.odds;
// // console.log(team1, draw, team2)

// //  function printGoals(...players){
// //   console.log(`${players.length} goals were scored`)
// //  }
// //  printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels')

// //  game.odds.team1 < game.odds.team2 && console.log("Team1 is likely to win")
// //  console.log(game.odds.team1)

// // //  we can also compute obj properties with ex6 e.g
// // const weekDays = ["mon", "tue","wed", "thur", "fri", "sat", "sun"]
// //  const hours = {
// //   thur: {
// //     open: 12,
// //     close: 22,
// //   },
// //   fri: {
// //     open: 11,
// //     close: 23
// //   },
// //   [weekDays[5]]: {
// //     open: 0,
// //     close: 24,
// //   },
// // };

// //  const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // // Enhanced ex6
// //   hours,
//   // we can also write methods without function word
//   myOrder: function(x, y){
//     return [this.starterMenu[x], this.mainMenu[y]]
//   },

//   orderDeliveryn ({time, y, x, address}){
//    return`Your order ${this.mainMenu[y]} and ${this.starterMenu[x]} will be soon delivered to ${address} at ${time}.`
//   },

//   orderPastern (ing1, ing2, ing3){
//    console.log(`Here is your favourite pasta ${ing1} ${ing2} ${ing3}`)
//   },
//   placeOrder(order, ...someOrder){
//     console.log(order);
//     console.log(someOrder)
//   }
// };

// const days = ["mon", "tue","wed", "thur", "fri", "sat", "sun"]
// for(const day of days){
//   // Here we are using nulish operator coz res opens at 0:00hrs
//   /*Also we use bracket notation since its dynamic but dot 
//   notation is static */
//   const openday = restaurant.hours[day]?.open ?? "closed"
//   console.log(`On ${day}, we are open at ${openday}`)

// // Optional Chaining in methods => if it doesn't exist it will run the next value
// console.log(restaurant.myOrder?.(0,1) ?? "This method does not exist")

// // Optional chaining in Arrays
// const me = [{name: "mitchell", age: 25, gender: "female"},
// {name: "Malvin", age:26, gender: "male"}];
// const chaining = me[1]?.gender ?? "That person's name does not exist"
// console.log(chaining);

// // Looping objects
// const properties = Object.keys(hours);
// console.log(properties)

// let openStr = `we are open on ${properties.length} days:`;
// for(const day of properties){
//   openStr += `${day}, `;
// }

// console.log(openStr)
// /*iterates through the array(entries) and prints the key-value i.e
// day and the hours */
// const entries = Object.entries(hours);
// console.log(entries);
// for (const [day, {open, close}] of entries){
//   console.log(`on ${day} we are open at ${open} and close at ${close}`)
// }
// }


// Coding Challenge #4

/* 



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      pone: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  myOrder: function(x, y){
    return [this.starterMenu[x], this.mainMenu[y]]
  },

  orderDelivery: function ({time, y, x, address}){
   return`Your order ${this.mainMenu[y]} and ${this.starterMenu[x]} will be soon delivered to ${address} at ${time}.`
  },

  orderPaster: function (ing1, ing2, ing3){
   console.log(`Here is your favourite pasta ${ing1} ${ing2} ${ing3}`)
  },
  placeOrder: function(order, ...someOrder){
    console.log(order);
    console.log(someOrder)
  }
};
console.log(restaurant.orderDelivery({
  time:"20:00",
  x: 2,
  y: 1,
  address:"Nairobi"
}))

// // Destructuring Objects
// const {name: restaurantName, mainMenu: menu, starterMenu: appetizer, openingHours: hours} = restaurant
// console.log(restaurantName, menu,appetizer, hours)

// // Destructuring Nested Objects
// const { fri: {open: morning, close: evening}} = restaurant.openingHours;
// console.log(morning, evening);

// // Destructuring arrays
// let [main, secondary] = restaurant.categories;
// // using commas skips the next element
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, branch] = restaurant.myOrder(2, 0);
// console.log(starter, branch)

// // Nested destructuring
// const nestedArr = [2, 4, [5, [8, 9]]]
// const [a, , [b,[, c]]] = nestedArr;
// console.log(a, b, c)

// // Mutating Variables
// let x = 111;
// let y = 310;

// const obj = {x: 50, y: 25, c: 89};
// // you need to close in paranthesis or else it will
// // throw an error
// ({x, y} = obj);
// console.log(x, y)

const array = [1, 2, 3, 4, 5];
const newArray = [9,8,7, ...array]
console.log(newArray);
console.log(...newArray)

// We can join two arrays using
// 1.
const menu = [...restaurant.mainMenu.concat(restaurant.starterMenu)];
console.log(...menu)

// 2.
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu2);

const myName = "Mitchell"
const letters = [...myName,"","j"];
console.log(letters)
console.log(...myName)

const myIngredients = [
  // prompt("let\'s take pasta ingredient 1?"),
  // prompt("ingredient 2?"),
  // prompt("ingredient 3?")
]
// console.log(myIngredients)

// restaurant.orderPaster(...myIngredients);
// // This one is like writting
// restaurant.orderPaster(myIngredients[0], myIngredients[1], myIngredients[2])

// const newRestaurant = {founded: 1997, ...restaurant, owner: "Mitchell"};
// console.log(newRestaurant)
// newRestaurant.name = "Kalenjin food";
// console.log(newRestaurant.name);
// console.log(restaurant.name)

// const array1 = [1, 2,3,4,9,8,7];
// const[a, b, c, ...array2] = array1;
// console.log(a, b, c, array2);

// const [pizza, macroli, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu];
// console.log(pizza, macroli, otherFood)
// /*THis will log thur and friday, coz sat has already
// been used. The rest operator should be the last element
// and also it should be 1 */
// const {sat, ...otherDays} = restaurant.openingHours;
// console.log(otherDays);

// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   // if you want only sum, log it outside the loop scope
//   console.log(sum);
// }
// add(2, 5);
// add(7, 8, 9, 5);
// add(6, 7, 8, 5, 4, 6);

// restaurant.placeOrder("Pizza", "chicken", "drumstick", "wings")
// restaurant.placeOrder("sushi");

// const guests = 50;
// const guests1 = guests || 20;
// console.log(guests1)

// console.log(0 && "Mitch")
// restaurant.categories && restaurant.myOrder("carrots", "ugali")

// const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu1)

// for(let myMenu of menu1.entries()){
//   console.log(myMenu);
// }
// // the same as the above
// for (let i = 0; i < menu1.length; i++){
//   console.log(menu1[i])
// }

// for (const [i, list] of menu1.entries()){
//   console.log(`${i + 1} ${list}`)