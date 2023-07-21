'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const parentEl = document.querySelector(".nav__links")
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav")
const header = document.querySelector(".header")


//Modal window
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


// Button scrolling
btnScrollTo.addEventListener("click", function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)

  console.log(e.target.getBoundingClientRect())

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset)

  console.log("height/width", document.documentElement.clientHeight,
  document.documentElement.clientWidth)

  section1.scrollIntoView({behavior: "smooth"})

});

//Navigation page => using this method will mean you are creating so many event
// listeners so it is good to use event delegation

// document.querySelectorAll(".nav__link").forEach(function (el){
//   el.addEventListener("click", function(e){
//     e.preventDefault()
//     const id = this.getAttribute("href");
//     //will get the href of each section in the nav__link which is also the id of each section
//     document.querySelector(id).scrollIntoView({behavior: "smooth"});
//     //this will scroll to the section corresponding to each section id
//   })
// })

//using event delegation => delegating the event to be handled by the parent element

parentEl.addEventListener("click", function(e){
  e.preventDefault()
  
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute("href")
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
})

//tabbed component


tabsContainer.addEventListener("click", function(e){
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked)


  if(!clicked) return;

  //remove content and active class in all buttons
  
  tabs.forEach((t) => t.classList.remove("operations__tab--active"))
  tabsContent.forEach(c => c.classList.remove("operations__content--active"))
  //it will remove the active class in each button the add ctive class when its clicked
  //so the rest will be not be active, only one
  
  //active tab
  clicked.classList.add("operations__tab--active")

  //active content
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")
})

//creating a nav hoover
function handleHoover(e) {
  // Check if the element the mouse is over has the class "nav__link"
  if (e.target.classList.contains("nav__link")) {
    // If it is a navigation link, do the following:
    const link = e.target; // Store the clicked link in a variable called "link"
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    // Find all the links (siblings) inside the navigation container and store them in the "siblings" variable
    const logo = link.closest(".nav").querySelector("img");
    // Find the logo (image) inside the navigation container and store it in the "logo" variable

    // Loop through all the sibling links and set their opacity to a specific value (explained below)
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    // Set the logo's opacity to a specific value (explained below)
    logo.style.opacity = this;
  }
}

 nav.addEventListener("mouseover", handleHoover.bind(0.5))
 nav.addEventListener("mouseout", handleHoover.bind(1))
 /*In both lines, bind() is used to create a new function based on the handleHoover function, 
 but with a specific value (0.5 for mouseover and 1 for mouseout) as the this value. 
 The bind() method creates a copy of the handleHoover function and sets the this value to 
 the specified argument (0.5 or 1). So, when the event occurs, the handleHoover function will 
 be called with this referring to the specified opacity value.
Without using bind(), the this value inside the handleHoover function would have referred to the
 DOM element that triggered the event (in this case, the nav element), which is not what the 
 code intends. By using bind(), the code ensures that the function will be called with the correct 
 this value (the specified opacity) as intended for the hover effect. */

 //sticky navigation
//  const initialCoords = section1.getBoundingClientRect();

//  window.addEventListener("scroll", function(){
//   if(window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky")
//  })

 //Sticky navigation: INtersection observer API

 const navHeight = nav.getBoundingClientRect().height;

 function stickyNav(entries){
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add("sticky")
  else nav.classList.remove("sticky")
 }

 const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
 })

 headerObserver.observe(header);

//  Reveal sections

const allSections = document.querySelectorAll(".section")

const revealSection= function(entries, observer){
  const [entry] = entries;
  console.log(entry)

  if(!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden")
  observer.unobserve(entry.target)
}
 
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})
allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden")
})

/////////////
//LERANING PURPOSES
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

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function(e){
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords)

//   console.log(e.target.getBoundingClientRect())

//   console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset)

//   console.log("height/width", document.documentElement.clientHeight,
//   document.documentElement.clientWidth)

  //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)
  // /*so that when you sclick the button it scrolls to sec 1, we have to add window.pageOffset
  // so that it can take us regardless of rec dimensions */

  // //2nd method
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // })

  //modern ways
//   section1.scrollIntoView({behavior: "smooth"})

// });


// const h1 = document.querySelector("h1");
// const eventH1 = function(e){
//   alert("added event listener")
// }

// h1.addEventListener("mouseenter", eventH1 );
// setTimeOut(() => h1.removeEventListener("mouseenter", eventH1), 3000);

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min + 1) + min)
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


// document.querySelector(".nav__link").addEventListener("click", function(e){
//   this.style.backgroundColor = randomColor()
//   console.log("LINK", e.target, e.currentTarget)
//   // e.currentTarget = this i.e this always points to the selected element that receives the event handler

//   //stop propagation
//   // e.stopPropagation()
// })

// document.querySelector(".nav__links").addEventListener("click", function(e){
//   this.style.backgroundColor = randomColor()
//   console.log("LINK", e.target, e.currentTarget)
// })

// document.querySelector(".nav").addEventListener("click", function(e){
//   this.style.backgroundColor = randomColor()
//   console.log("LINK", e.target, e.currentTarget)
// })

//dom traversing

// const h1 = document.querySelector("h1");

// //going downwards to child
// console.log(h1.querySelectorAll(".highlight"))
//selects only hightlight children in h1, no matter how deep it is 
//in dom three but cannot select other children with highlight that do 
// not belong to h1 element
// console.log(h1.children) // only h1 children
// console.log(h1.childNodes) //nodes are everything comments, texts, span etc
// h1.firstElementChild.style.color = "blue"
// h1.lastElementChild.style.color = "greenyellow"

// //going upwards to parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)
// console.log(h1.closest(".header").style.backgroundColor = "yellow")

// //going sideways to sibling
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)