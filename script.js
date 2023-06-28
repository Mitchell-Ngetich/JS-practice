'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal")
const btnsModal = document.querySelectorAll(".show-modal");

function removeDisplay (){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
}

function display (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
}
console.log(btnClose)
console.log(btnsModal);
for (let i = 0; i < btnsModal.length; i++){
    btnsModal[i].addEventListener("click", removeDisplay)
}

btnClose.addEventListener("click", display)

overlay.addEventListener("click", display)

document.addEventListener("keydown", function (e){
    console.log(e)
    if(e.key === "Escape" &&  !modal.classList.contains("hidden")){
     display()
  }
})