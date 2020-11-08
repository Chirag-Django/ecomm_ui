let signin_btn = document.getElementById("signin-btn");
let register_btn = document.getElementById("register-btn");
let container = document.querySelector(".container");

register_btn.addEventListener('click',()=>{
    container.classList.add("register-mode");
})

signin_btn.addEventListener('click',()=>{
    container.classList.remove("register-mode");
})

