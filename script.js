'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(function(btn){
  btn.addEventListener("click", openModal)
})


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////
//selecting elements by tag name
// const btns = document.getElementsByTagName("button");
// console.log(btns)

// //selecting by class name
// console.log(document.getElementsByClassName("xyz"));

// //selecting by id
// // console.log(document.getElementById("id"))

// //creating and inserting elements 
// const message = document.createElement("div"); //creat
// message.classList.add("cookie-message")//add class name;
// message.innerHTML = 'We use cookies for improved functions and analytics <button class="btn btn--close-cookie">Got it!</button>';
// const header = document.querySelector(".header")

// //appending
//  header.append(message)
// // header.before(message) // b4 the header
// // header.after(message)  // after the header

// /*even if you append in multiple places, it will only appear in one place since it is a
//  live element living in the DOM so it can't be in different places at the same time*/

// //deleting the element
// document.querySelector(".btn--close-cookie").
// addEventListener("click", function(){
//   // message.remove()
// })

// //styling
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%"

// //to access the origin style use
// console.log(getComputedStyle(message).height)
//  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"

//  document.documentElement.style.setProperty("--color-primary", "orangered")
//  //change css variable color in root

//  //Attributes
// //  dom can access any attribute of an element in html
// const logo = document.querySelector(".nav__logo");
// console.log(logo.src)
// console.log(logo.alt)
// console.log(logo.className)

// //we can also update the attribute
// logo.alt = "Beautiful minimalist logo";

// //accessing non standard attr
// console.log(logo.getAttribute("attr"));

// //classes
// logo.classList.add("xy")
// logo.classList.remove("xy")
// logo.classList.toggle("xy")
// logo.classList.contains("xy")