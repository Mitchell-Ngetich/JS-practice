'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this 
time they are studying if dogs are eating too much
 or too little.
Eating too much means the dog's current food portion
 is larger than the recommended portion, and eating 
 too little is the opposite.
Eating an okay amount means the dog's current food 
portion is within a range 10% above and 10% below 
the recommended portion (see hint).

1. Loop over the array containing dog objects, 
and for each dog, calculate the recommended food
portion and add it to the object as a new property.
Do NOT create a new array, simply loop over the array.
Forumla: recommendedFood = weight ** 0.75 * 28.
(The result is in grams of food, and the weight needs
to be in kg)
2. Find Sarah's dog and log to the console whether it's eating 
too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so 
this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat 
too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like 
this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah 
and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the 
amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount 
of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount 
of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended 
food portion in an ascending order (keep in mind that the portions are
   inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use 
the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion 
means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the 
recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'], },
  { weight: 8, curFood: 200, owners: ['Matilda'], },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'], },
  { weight: 32, curFood: 340, owners: ['Michael'], }
];

dogs.forEach(function(dog){
  return dog.recFood =  Math.trunc(dog.weight ** 0.75 * 28);
})
console.log(dogs)

//2
const saraDog = dogs.find(dog => dog.owners[0] === "Sarah") //we can also use .includes instead of bracket notation
console.log(saraDog)
//current > (recommended * 0.90) && current < (recommended * 1.10). 
if(saraDog.curFood > saraDog.recFood) {
  console.log("Sara's dog is eating too much food")
} else {
  console.log("Sara's dog is eating too little food")
//we can use ternary operator 
}
 
/*3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat 
too little ('ownersEatTooLittle').*/

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.map(function (dog){
  dog.curFood > dog.recFood ? ownersEatTooMuch.push(...dog.owners) :  ownersEatTooLittle.push(...dog.owners) 
})
console.log(ownersEatTooMuch, ownersEatTooLittle);

//2nd method
const ownersEatTooMuch1  = dogs.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners);

const ownersEatTooLittle1  = dogs.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners)

/* 4. Log a string to the console for each array created in 3., like 
this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah 
and John and Michael's dogs eat too little!"*/

if(ownersEatTooMuch.length > 0){
  console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`)
};

if(ownersEatTooLittle.length > 0){
  console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`)
}

/* 5. Log to the console whether there is any dog eating EXACTLY the 
amount of food that is recommended (just true or false)*/
const dogRecommended  = dogs.some(dog => dog.curFood === dog.recFood);
console.log(dogRecommended);

/* 6. Log to the console whether there is any dog eating an OKAY amount 
of food (just true or false)*/

const okayDog = dogs.some(dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10)
//use strict operator
console.log(okayDog)

/* 7. Create an array containing the dogs that are eating an OKAY amount 
of food (try to reuse the condition used in 6.)*/

//1st method
const okayArr = [];
 dogs.forEach(function(dog) {
if(dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10){
  okayArr.push(dog)
}
 })
 console.log(okayArr)

 //2nd method
const okayArr1 = dogs.filter(dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10
)
console.log(okayArr1)
/* 8. Create a shallow copy of the dogs array and sort it by recommended 
food portion in an ascending order (keep in mind that the portions are
   inside the array's objects) sorting the object not just rec portion
*/
const dogSort = dogs.slice(dog => dog.recFood).sort((a, b) => a.recFood - b.recFood)
console.log(dogSort)

// const dogSorting = dogSort.sort((a, b) => a - b)
// console.log(dogSorting)

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function
 from the previous challenge, but this time 
 as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const age1 = [5, 2, 4, 1, 15, 8, 3];
// const age2 =  [16, 6, 10, 5, 6, 1, 4]
// const ages = [...age1, ...age2]

// const calcAverageHumanAge1 = ages => {
//   const humanAge = ages.map(age => age <= 2 ?
//   age * 2 : 16 + age * 4).filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(humanAge);
// }
// calcAverageHumanAge1(ages)

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages 
and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts 
an arrays of dog's ages ('ages'), and does the following
 things in order:

1. Calculate the dog age in human years using the following 
formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
 If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which 
  is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should
   already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const age1 = [5, 2, 4, 1, 15, 8, 3];
// const age2 =  [16, 6, 10, 5, 6, 1, 4]
// const ages = [...age1, ...age2]

//  function calcAverageHumanAge(ages){
//   const humanAge = ages.map(function(age){
//     if(age <= 2){
//       return age * 2
//     } else {
//       return  16 + age * 4
//     }
//   })
//   const over18 = humanAge.filter((age) => age > 18);
//   const calAve = over18.reduce(function(acc, age){
//       return (acc + age / over18.length)
//   }, 0);
//   console.log(calAve);

// }
// calcAverageHumanAge(ages)

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. 
So each of them asked 5 dog owners about their
 dog's age, and stored the data into an array 
 (one array for each). For now, they are just 
 interested in knowing whether a dog is an adult
  or a puppy. A dog is an adult if it is at least 
  3 years old, and it's a puppy if it's less than 
  3 years old.

Create a function 'checkDogs', which accepts 2 
arrays of dog's ages ('dogsJulia' and 'dogsKate')
, and does the following things:

1. Julia found out that the owners of the FIRST 
and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove 
the cat ages from that copied array (because it's a 
bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether i
t's an adult ("Dog number 1 is an adult, and is 5 years old")
 or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// let julia1 = [3, 5, 2, 12, 7];
// let kate1 = [4, 1, 15, 8, 3];
// let julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];
// function checkDogs(dogsJulia, dogsKate){
//  const newJulia1 = julia1.slice(1, 3);
//  console.log(newJulia1)
//  const lastJulia = julia2.slice(1, 3)// 3 is the length-1 so it will pick
// //  the [1] and [2] due to [3] - 1
//  console.log(lastJulia);
//  const finalArr = [...newJulia1, ...kate1, ...kate2,...lastJulia];
//  console.log(finalArr);

//  finalArr.forEach(function(dog, i){
//   if(dog >= 3){
//     console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//   } else {
//     console.log(`Dog number ${i + 1} is still a puppy 🐶`)
//   }
//  })
// }
// checkDogs();
// console.log(julia1)
// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// function displayMovements(movements, sort = false) {
//   containerMovements.innerHTML = '';

//   /*if sort is true then sort the movs else diplay movs */
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// }

// function displayBalance(acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// }

// function displaySummary(acc) {
//   const income = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${income}€`;
//   // console.log(income)

//   const expense = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(expense)}€`;
//   // console.log(expense)

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => int >= 1)
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
//   // console.log(interest);
// }

// function createUserNames(accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// }
// createUserNames(accounts);

// function updateUI(acc) {
//   displayMovements(acc.movements);

//   //display balance
//   displayBalance(acc);

//   //display summary
//   displaySummary(acc);
// }

// //EVENT HANDLERS
// let currentAccount;

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     //display the UI and welcome message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }👋😊`;
//     containerApp.style.opacity = 100;

//     //clear input fields

//     (inputLoginUsername.value = inputLoginPin.value = ''), inputLoginPin.blur(); // removes the blinking in input field

//     //update UI
//     updateUI(currentAccount);
//     /*change the initial callback arg fromm acc1.movements to current
//     acc. movements so that the data can be generated dynamically */
//   }
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   console.log(amount, receiverAcc);

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     //doing the trasfers
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     //update UI
//     updateUI(currentAccount);
//   }
//   inputTransferTo.value = inputTransferAmount.value = '';
// });

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     //add to the movements loan granded
//     currentAccount.movements.push(amount);

//     //update the UI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = '';
// });

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//     //Delete the account
//     accounts.splice(index, 1);
//     // Hide the UI
//     containerApp.style.opacity = 0;
//     inputCloseUsername.value = inputClosePin.value = ''; // clear input values
//   }
// });

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();

//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });
// // console.log("Home")

// // PRACTICALS

// //FIND METHOD
// // console.log(movements);
// // const findMov = movements.find(mov => mov > 300)
// // console.log(findMov);

// // console.log(accounts);
// // const findAcc = accounts.find(acc => acc.owner === 'Jonas Schmedtmann');
// // console.log(findAcc);

// // let forAcc;
// // for(const acc of accounts){
// //   acc.owner === 'Jonas Schmedtmann' ? forAcc = acc : "break"
// // }
// // console.log(forAcc)
// // const deposits = movements.filter(mov => mov > 0)
// // console.log(movements)
// // console.log(deposits)

// // const withdrawals = movements.filter(mov => mov < 0)
// // console.log(withdrawals);

// // const globalBal = movements.reduce(function(acc, cur, i, arr){
// //   return acc + cur;
// // }, 0)
// // console.log(globalBal)

// // USING REDUCE METHOD TO CALC MIN/MAX
// // const max = movements.reduce(function(acc, cur){
// //   if(acc > cur) return acc;
// //   else return cur
// // }, movements[0])
// // console.log(max);

// // const min = movements.reduce(function(acc, cur){
// //   if(acc < cur) return acc
// //   else return cur
// // }, movements[0])
// // console.log(min)

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// // ARRAY METHODS
// // 1. .SLICE();

// // const arr = ["a", "b", "c", "d", "e", "f"]
// // console.log(arr.slice(2,5)); // cde
// // console.log(arr.slice(2)); //cdef
// // console.log(arr.slice(-3)); //def
// // console.log(arr.slice(-4, -1)); // cde

// //2. SPLICE()

// // arr.splice(-1);
// // console.log(arr);
// // arr.splice(2, 3)// first one is the position, second arg is no of elements to be deleted
// // console.log(arr);

// // console.log(arr.splice(-1));
// // console.log(arr)

// //3. REVERSE()
// // const arr2 = ["z", "y", "x", "w"]
// // console.log(arr2.reverse())
// // console.log(arr2)

// // //4. CONCAT
// // const arr3 = arr.concat(arr2);
// // //joins two arrays
// // console.log(arr3)
// // //or use spread opeator

// // const arr4 = [...arr, ...arr2]
// // console.log(arr4)

// // //5. JOIN()
// // console.log(arr3.join(", "))// how you want to join the letters

// // //LOOPING ARRAYS
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const deposit = [];
// // const withdraw = [];
// // for(const [i, movement] of movements.entries()){
// //   if(movement < 0){
// //     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
// //   } else {
// //     console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`)
// //   }
// // }
// // console.log(deposit, withdraw)

// // //FOREACH
// //  console.log("---FOREACH---")
// // movements.forEach(function(movement, i, a) {
// //   if(movement < 0){
// //       console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`) //removes the -ve sign
// //   } else {
// //     console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`)
// //   }
// //   console.log(a)
// // });

// // // Maps
// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // currencies.forEach(function(element, key, map){
// //   //you can use element or value
// //   console.log(`${key}: ${element}`)
// // })

// // const mySet = new Set(["USD", "KSH", "EURO", "KSH"])
// // console.log(mySet);

// // mySet.forEach(function(value, key, set){
// //   console.log(`${key}: ${value}`)
// // })

// //
// // const usdToKSH = 141;
// //CHAINING
// // const euroToUSD = 1.1
// //  const totalDeposits = movements.filter(mov => mov > 0).map(mov => mov * euroToUSD).reduce((acc, mov) => acc + mov, 0)
// //  console.log(totalDeposits)

// // //MAP METHOD
// // const currency = movements.map((mov) => mov * usdToKSH);
// // console.log(movements);
// // console.log(currency);

// // //FOREACH METHOD
// // const arr = [];
// // const currency2 = movements.forEach((mov) => arr.push(mov * usdToKSH) )
// // console.log(arr)

// // //FOR...OF METHOD
// // const arr1 = []
// // for(const mov of movements){
// //   arr1.push(mov * usdToKSH )
// // }
// // console.log(arr1);

// // //CONCLUSION
// // // map is the easiest one to loop through an array

// // const mapDescr = movements.map((movement, i, arr) =>
// //   // if(movement < 0){
// //   //        return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}` //removes the -ve sign
// //   //      } else {
// //   //        return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`
// //   //     }
// //   `Movement ${i + 1}: You ${movement > 0 ? "deposited" : "withdrew"} ${Math.abs(movement)}`
// // )
// // console.log(mapDescr);

// //console.log(movements)
// //checks equality
// // const any = movements.includes(-400);
// // console.log(any)

// //checks condition
// // const any1 = movements.some(mov => mov > 1000);
// // console.log(any1)

// // console.log(movements.every(mov => mov === "number"));

// //FLAT() METHOD; =>unbreaks the nested array and return an array

// // const arr = [[1,2], [3,4],[5, [6, 7]]];
// // console.log(arr.flat(2))

// // const movements1 = accounts.map((acc) => acc.movements).flat().reduce((acc, cur) => acc + cur, 0);
// // console.log(movements1)

// // FLATMAP METHOD => staright forward
// // const movements2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// // console.log(movements2)

// // console.log(movements)

// // //SORT METHOD(Mutates Array) => Ascending order

// // const assOrder = movements.sort((a, b) => a - b);
// // console.log(assOrder)

// // // => descending order
// // console.log(movements.sort((a, b) => b - a))

// // console.log(movements)
// // const slice = movements.slice()
// // console.log(slice)

// //HOE TO CREATE AN ARRAY

// // const y = new Array(7)
// // y.fill(1)
// // console.log(y);
// // const x = Array.from({length: 7}, (cur, i) => i + 1)
// // console.log(x);

// // //generates a random number between 1 and 100
// // const arr = Array.from({length: 100}, () => Math.floor(Math.random() * 100) + 1);

// // console.log(arr)

// // const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
// // console.log(randomNumbers);

// console.log(accounts);

// const { deposit, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //  cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur)
//       //we can also use [] notation instead of . notation
//       sums[cur > 0 ? 'deposit' : 'withdrawal'] += cur; //same as the above but alot cleaner
//       return sums;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );
// console.log(deposit, withdrawal);
// console.log(typeof deposit);

// function convertTitle(title) {
//   const capitalizetitle = str => str[0].toUpperCase() + str.slice(1);
//   const exception = [
//     'a',
//     'an',
//     'the',
//     'and',
//     'but',
//     'or',
//     'an',
//     'in',
//     'with',
//     'long',
//   ];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exception.includes(word) ? word : capitalizetitle(word)))
//     .join(' ');
//   return capitalizetitle(titleCase);
// }

// console.log(convertTitle('this is a nice title'));
// console.log(convertTitle('this is a LONG title but not too LONG'));
// console.log(convertTitle('and there is another title with an EXAMPLE'));
// console.log(convertTitle('THIS is my TRIAL to see if i understand arrays'));
