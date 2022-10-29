let login = document.querySelector(".form-login");
let register = document.querySelector(".form-register");

let btnRegister= document.getElementById('register');
let btnLogin = document.getElementById('login');

let logTittle = document.getElementById('tittle');

//open to register page 

btnRegister.addEventListener("click" , ()=>{
    login.classList.remove("active");
    login.classList.add("hide")
    register.classList.remove("hide");
    register.classList.add("active");

    //Change Page Tittle
    logTittle.innerHTML="Register";

});

//open to login page 

btnLogin.addEventListener("click" , ()=>{
    register.classList.remove("active"); 
    register.classList.add("hide");
    login.classList.remove("hide");
    login.classList.add("active");

    //Change Page Tittle
    logTittle.innerHTML="Login";
});