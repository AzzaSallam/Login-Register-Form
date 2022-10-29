let login = document.querySelector(".form-login");
let register = document.querySelector(".form-register");

let btnRegister= document.getElementById('register');
let btnLogin = document.getElementById('login');

let logTittle = document.getElementById('tittle');

//open to register page 

btnRegister.onclick = function(){
    register.style.display= 'block';
    login.style.display= 'none';
    logTittle.innerHTML="Register";
}

//open to login page 

btnLogin.onclick = function(){
    login.style.display= 'block';
    register.style.display= 'none';
    logTittle.innerHTML="Login";
}