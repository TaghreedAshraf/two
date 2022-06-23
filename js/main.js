var login = document.getElementById('login');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var loginBtn = document.getElementById('loginBtn');
var alertCoreect = document.getElementById('alertCoreect');
var alertRequierd = document.getElementById('alertRequierd');
var linkHome = document.getElementById('linkHome');

var inputNameSignup = document.getElementById('inputNameSignup');
var inputEmailSignup = document.getElementById('inputEmailSignup');
var inputPasswordSignup = document.getElementById('inputPasswordSignup');
var signupBtn = document.getElementById('signupBtn');
var alertRequierdData =document.getElementById('alertRequierdData');
var alertSuccess = document.getElementById('alertSuccess');
var alertEmail = document.getElementById('alertEmail');

var userName = document.getElementById('userName');

var inputs = document.getElementsByClassName('form-control');
var users = [];


if(localStorage.getItem('usersData') != null) 
{
  users = JSON.parse(localStorage.getItem('usersData'))
}


if ( signupBtn)
{
  signupBtn.addEventListener('click' , addUser)

  function addUser()
  {
    if(inputNameSignup.value == "" || inputEmailSignup.value == "" || inputPasswordSignup.value == "")
    {
      alertRequierdData.classList.remove('d-none');
      alertSuccess.classList.add('d-none');
      alertEmail.classList.add('d-none');
    }
  
    else if ( compare() == true)
    {
      alertEmail.classList.remove('d-none');
      alertRequierdData.classList.add('d-none');
      alertSuccess.classList.add('d-none');
    }
  
    else if ( compare() == false)
    {
      var user = 
      {
        name : inputNameSignup.value,
        email : inputEmailSignup.value,
        password : inputPasswordSignup.value,
      }
      users.push(user);
      alertSuccess.classList.remove('d-none');
      alertRequierdData.classList.add('d-none');
      alertEmail.classList.add('d-none');
      localStorage.setItem('usersData' , JSON.stringify(users))
      clearInput()
    }
  }
}


function clearInput()
{
  for (var i=0 ; i<inputs.length ; i++)
  {
    inputs[i].value = "";
  }
}


// ---- function check email & password login
if(loginBtn)
{
  loginBtn.addEventListener('click' , compareData)

  function compareData()
  {
    var x = "";
    var dataEmail = inputEmail.value;
    var dataPassword = inputPassword.value;
  
    if (inputEmail.value == "" || inputPassword.value == "")
    {
      alertRequierd.classList.remove('d-none')
      alertCoreect.classList.add('d-none')
    }
    else
    {
      alertRequierd.classList.add('d-none')
      alertCoreect.classList.remove('d-none')
    }
  
    for ( var i=0 ; i<users.length ; i++)
    {
      if(users[i].email.toLowerCase() == dataEmail.toLowerCase()  && users[i].password.toLowerCase() == dataPassword.toLowerCase())
      {
        profileName = users[i].name;
        alertRequierd.classList.add('d-none')
        alertCoreect.classList.add('d-none')
        localStorage.setItem('username' , profileName)
        linkHome.href = 'home.html';
      }
    }
  }
}

if (localStorage.getItem('username') != null)
{
  userName.innerHTML = localStorage.getItem('username') ;
}

function compare()
{
  var dataEmailValid = inputEmailSignup.value;
  var emailValid = false;

  for (var i=0 ; i<users.length ; i++)
  {
    if(users[i].email.toLowerCase() == (dataEmailValid.toLowerCase()))
    {
      emailValid = true ;
    }
    else
    {
      emailValid = false;
    }
  }
  return emailValid;
}