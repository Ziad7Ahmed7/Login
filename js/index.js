let inputName = document.getElementById("name");
let inputLoginEmail = document.getElementById("loginEmail");
let inputSignEmail = document.getElementById("signEmail");
let signupPassword = document.getElementById("signupPassword");
let loginPassword = document.getElementById("loginPassword");
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let btnLogin = document.getElementById("log");
let btnSignup = document.getElementById("sign");
let home = document.getElementById("home");
let logout = document.getElementById("logout");
let signinLink = document.getElementById("signin-link");
let signupLink = document.getElementById("signup-link");
let warning = document.getElementById("warning");
let btnClose = document.getElementById("close");

let userList = [];

if (localStorage.getItem("userDetails")!==null) {

    userList = JSON.parse(localStorage.getItem("userDetails"));
}




function addUser() {
   let userDetails = {
        name: inputName.value,
        pass: signupPassword.value,
        email: inputSignEmail.value, 
    };

    userList.push(userDetails);


    localStorage.setItem(  'userDetails',   JSON.stringify(userList));
    
}


btnSignup.addEventListener('click' , function(){
    if( validName()&& validSignEmail()&& validSignPassword() ){

        login.classList.remove("d-none");
        signup.classList.add("d-none");
        warning.classList.add("d-none");
        addUser()
        


    }
    else{
        warning.classList.remove('d-none');
    }
    clear();


})

btnLogin.addEventListener("click", function () {
  if (validLoginEmail() && validLoginPassword()) {
    let loginEmail = inputLoginEmail.value;
    let loginPass = loginPassword.value;
    let userFound = false;
    let userName = "";

    for (let user of userList) {
      if (user.email === loginEmail && user.pass === loginPass) {
        userFound = true;
        userName = user.name;
        break;
      }
    }

    if (userFound) {
      home.classList.remove("d-none");
      login.classList.add("d-none");
      warning.classList.add("d-none");
      welcome.innerHTML = `<h1>Welcome, ${userName}!</h1>`;
    } else {
      alert("Wrong Email or Password, please try again");
    }
  }
  clear();
});




logout.addEventListener('click' , function(){
    signup.classList.remove('d-none');
    home.classList.add('d-none');

})

signinLink.addEventListener("click", function (e) {
  login.classList.remove("d-none");
  signup.classList.add("d-none");

});
signupLink.addEventListener("click", function (e) {
  signup.classList.remove("d-none");
  login.classList.add("d-none");

});

btnClose.addEventListener("click", function (e) {
  warning.classList.add("d-none");
});
document.addEventListener("click", function (e) {
  if (e.target === warning) {
    warning.classList.add("d-none");
  }
});


function validName() {

    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    let text = inputName.value;
    if (nameRegex.test(text)) {
        inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
        return true
        
    }
    else{
                inputName.classList.add("is-invalid");
                inputName.classList.remove("is-valid");
                return false

    }

}
inputName.addEventListener('input', function () {
    validName();
})

function validSignPassword() {
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let pass = signupPassword.value;

    if (passwordRegex.test(pass)) {
      signupPassword.classList.add("is-valid");
      signupPassword.classList.remove("is-invalid");
      return true
    } else {
      signupPassword.classList.add("is-invalid");
      signupPassword.classList.remove("is-valid");
      return false
    }
}

signupPassword.addEventListener('input',  function(){
    validSignPassword();
})




function validLoginPassword() {
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let signPass = loginPassword.value;

    if (passwordRegex.test(signPass)) {
      loginPassword.classList.add("is-valid");
      loginPassword.classList.remove("is-invalid");
      return true
    }  else{
      loginPassword.classList.add("is-invalid");
      loginPassword.classList.remove("is-valid");
      return false
    }
}

loginPassword.addEventListener('input',  function(){
    validLoginPassword();
})


function validLoginEmail() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let loginEmail = inputLoginEmail.value;

    if(emailRegex.test(loginEmail)){


    inputLoginEmail.classList.add("is-valid");
      inputLoginEmail.classList.remove("is-invalid");
      return true
    }  else{
      inputLoginEmail.classList.add("is-invalid");
      inputLoginEmail.classList.remove("is-valid");
      return false
    }
}
inputLoginEmail.addEventListener('input', function () {
    validLoginEmail();
})




function validSignEmail() {

    const signEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let signEmail = inputSignEmail.value;

    if (signEmailRegex.test(signEmail)) {
      inputSignEmail.classList.add("is-valid");
      inputSignEmail.classList.remove("is-invalid");
      return true
    } else {
      inputSignEmail.classList.add("is-invalid");
      inputSignEmail.classList.remove("is-valid");
      return false
    }
}
inputSignEmail.addEventListener('input', function () {
    validSignEmail();
})



function clear() {
    inputLoginEmail.value = null;
    inputName.value = null;
    inputSignEmail.value = null;
    loginPassword.value = null;
    signupPassword.value = null;

    inputName.classList.remove('is-invalid', 'is-valid')
    inputLoginEmail.classList.remove("is-invalid", "is-valid");
    inputSignEmail.classList.remove("is-invalid", "is-valid");
    loginPassword.classList.remove("is-invalid", "is-valid");
    signupPassword.classList.remove("is-invalid", "is-valid");
    
}

