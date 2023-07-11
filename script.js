'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

const arr = ["a", "b", "c", "d", "e", "f"]
console.log(arr.slice(2,5)); // cde
console.log(arr.slice(2)); //cdef
console.log(arr.slice(-3)); //def
console.log(arr.slice(-4, -1)); // cde

//2. SPLICE()

// arr.splice(-1);
// console.log(arr);
// arr.splice(2, 3)// first one is the position, second arg is no of elements to be deleted
// console.log(arr);

console.log(arr.splice(-1));
console.log(arr)

//3. REVERSE()
const arr2 = ["z", "y", "x", "w"]
console.log(arr2.reverse())
console.log(arr2)

//4. CONCAT
const arr3 = arr.concat(arr2);
//joins two arrays
console.log(arr3)
//or use spread opeator

const arr4 = [...arr, ...arr2]
console.log(arr4)

//5. JOIN()
console.log(arr3.join(", "))// how you want to join the letters

//LOOPING ARRAYS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = [];
const withdraw = [];
for(const [i, movement] of movements.entries()){
  if(movement < 0){
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
  } else {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`)
  }
}
console.log(deposit, withdraw)

//FOREACH
 console.log("---FOREACH---")
movements.forEach(function(movement, i, a) {
  if(movement < 0){
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`) //removes the -ve sign
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
  }
  console.log(a)
});

// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(element, key, map){ 
  //you can use element or value
  console.log(`${key}: ${element}`)
})

const mySet = new Set(["USD", "KSH", "EURO", "KSH"])
console.log(mySet);

mySet.forEach(function(value, key, set){
  console.log(`${key}: ${value}`)
})