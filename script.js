'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 =  [16, 6, 10, 5, 6, 1, 4]
const ages = [...age1, ...age2]

 function calcAverageHumanAge(ages){
  const humanAge = ages.map(function(age, i, arr){
    if(age <= 2){
      return age * 2
    } else {
      return  16 + age * 4
    }
  })
  const over18 = humanAge.filter((age, i) => age > 18);
  const calAve = over18.reduce(function(acc, cur){
      return (acc + cur / over18.length)
  }, 0);
  console.log(calAve);
  
}
calcAverageHumanAge(ages)

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
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

function displayMovements (movements){
   containerMovements.innerHTML = '';

  movements.forEach(function(mov, i){
    const type = mov > 0 ? "deposit" : "withdrawal"
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html)
  })
}
displayMovements(account1.movements);

function displayBalance(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`
}
 displayBalance(account1.movements)

function createUserNames(accs){
  accs.forEach(function(acc){
    acc.username= acc.owner.toLowerCase().split(" ").map(name => name[0]).join("")
  })
}
createUserNames(accounts)
console.log(accounts)





// PRACTICALS

const deposits = movements.filter(mov => mov > 0)
console.log(movements)
console.log(deposits)

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals);

const globalBal = movements.reduce(function(acc, cur, i, arr){
  return acc + cur;
}, 0)
console.log(globalBal)

// USING REDUCE METHOD TO CALC MIN/MAX
const max = movements.reduce(function(acc, cur){
  if(acc > cur) return acc;
  else return cur
}, movements[0])
console.log(max);

const min = movements.reduce(function(acc, cur){
  if(acc < cur) return acc
  else return cur
}, movements[0])
console.log(min)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRAY METHODS
// 1. .SLICE();

// const arr = ["a", "b", "c", "d", "e", "f"]
// console.log(arr.slice(2,5)); // cde
// console.log(arr.slice(2)); //cdef
// console.log(arr.slice(-3)); //def
// console.log(arr.slice(-4, -1)); // cde

//2. SPLICE()

// arr.splice(-1);
// console.log(arr);
// arr.splice(2, 3)// first one is the position, second arg is no of elements to be deleted
// console.log(arr);

// console.log(arr.splice(-1));
// console.log(arr)

//3. REVERSE()
// const arr2 = ["z", "y", "x", "w"]
// console.log(arr2.reverse())
// console.log(arr2)

// //4. CONCAT
// const arr3 = arr.concat(arr2);
// //joins two arrays
// console.log(arr3)
// //or use spread opeator

// const arr4 = [...arr, ...arr2]
// console.log(arr4)

// //5. JOIN()
// console.log(arr3.join(", "))// how you want to join the letters

// //LOOPING ARRAYS
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposit = [];
// const withdraw = [];
// for(const [i, movement] of movements.entries()){
//   if(movement < 0){
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   } else {
//     console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`)
//   }
// }
// console.log(deposit, withdraw)

// //FOREACH
//  console.log("---FOREACH---")
// movements.forEach(function(movement, i, a) {
//   if(movement < 0){
//       console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`) //removes the -ve sign
//   } else {
//     console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`)
//   }
//   console.log(a)
// });

// // Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(element, key, map){ 
//   //you can use element or value
//   console.log(`${key}: ${element}`)
// })

// const mySet = new Set(["USD", "KSH", "EURO", "KSH"])
// console.log(mySet);

// mySet.forEach(function(value, key, set){
//   console.log(`${key}: ${value}`)
// })



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const usdToKSH = 141;

// //MAP METHOD
// const currency = movements.map((mov) => mov * usdToKSH);
// console.log(movements);
// console.log(currency);

// //FOREACH METHOD
// const arr = [];
// const currency2 = movements.forEach((mov) => arr.push(mov * usdToKSH) )
// console.log(arr)

// //FOR...OF METHOD
// const arr1 = []
// for(const mov of movements){
//   arr1.push(mov * usdToKSH )
// }
// console.log(arr1);

// //CONCLUSION 
// // map is the easiest one to loop through an array

// const mapDescr = movements.map((movement, i, arr) =>
//   // if(movement < 0){
//   //        return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}` //removes the -ve sign
//   //      } else {
//   //        return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`
//   //     }
//   `Movement ${i + 1}: You ${movement > 0 ? "deposited" : "withdrew"} ${Math.abs(movement)}`
// )
// console.log(mapDescr);