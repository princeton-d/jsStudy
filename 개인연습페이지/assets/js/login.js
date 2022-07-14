'use strict';

// querySelector
const loginForm = document.querySelector('#login-form');
const userIdInput = document.querySelector('#user-id-input');
const userPasswordInput = document.querySelector('#user-password-input');

// 변수, 상수
const userIdLocalStorage = localStorage.getItem('userid');
const userPasswordLocalStorage = localStorage.getItem('userpassword');

//event
loginForm.addEventListener('submit', onLoginSubmit);

//function
function onLoginSubmit(event) {
  event.preventDefault();
  const userId = userIdInput.value;
  const userPassword = userPasswordInput.value;
  userId === userIdLocalStorage && userPassword === userPasswordLocalStorage ? window.location.href = 'pages/login-after-page.html' : alert('id, 혹은 password가 없거나 틀립니다.')
}


