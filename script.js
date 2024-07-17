const form = document.getElementById('form');
const email= document.getElementById("email");
const emailFiled= document.getElementById("email");
const errorFiled = document.querySelector(".error")
const formSec = document.querySelector(".form")
const imageSec = document.querySelector(".image-container")
const thanksSec = document.querySelector(".thanks")
const emailTanks = document.querySelector(".emailthanks")
const mobileSec = document.querySelector(".mobile-img")
function handleSubmit(e){
    e.preventDefault()
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (emailPattern.test(email.value)) {
         console.log("valid");
         formSec.style.display = "none"
         imageSec.style.display = "none"
         mobileSec.style.display = "none"
         thanksSec.style.display = "block"
         emailTanks.textContent =`${email.value}`
         return true;
     } else {
         console.log("not");
         errorFiled.classList.toggle("show")
         emailFiled.classList.toggle("inupt-error")
         return false;
     }
}


form.addEventListener('submit',handleSubmit)
