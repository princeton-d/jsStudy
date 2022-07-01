'use strict';

//querySelector
const guestForm = document.querySelector("#guest-form");
const guestInput = guestForm.querySelector("#guest-form input");
const greeting = document.querySelector("#greeting");
const resetButton = document.querySelector("#reset-button");
const signUpButton = document.querySelector('#sign-up-button');

//string const
const HIDDEN_CLASSNAME = "hidden";
const GUESTNAME_KEY = "guestname";

//상수, 변수
const savedGuestName = localStorage.getItem(GUESTNAME_KEY);

//event
signUpButton.addEventListener('click', onClickGoSignUpButton);

//function
function onGuestSubmit(event) {
  event.preventDefault();
  const guestName = guestInput.value;
  localStorage.setItem(GUESTNAME_KEY, guestName);
  paintGreetings(guestName);
  guestForm.classList.add(HIDDEN_CLASSNAME);
  resetButton.addEventListener("click", onClickResetButton);
  resetButton.classList.remove(HIDDEN_CLASSNAME);
}
function paintGreetings(guestName) {
  greeting.innerText = `hello ${guestName}!(Guest)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onClickResetButton() {
  localStorage.removeItem(GUESTNAME_KEY);
  guestForm.addEventListener("submit", onGuestSubmit);
  resetButton.classList.add(HIDDEN_CLASSNAME);
  guestForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  guestInput.value = "";
}
function onClickGoSignUpButton() {
  localStorage.getItem('userid') === null ? window.location.href = "pages/sign-up.html" : alert('이미 가입하셨습니다.');
}

if (savedGuestName === null) {
  guestForm.classList.remove(HIDDEN_CLASSNAME);
  guestForm.addEventListener("submit", onGuestSubmit);
} else {
  paintGreetings(savedGuestName);
  guestForm.classList.add(HIDDEN_CLASSNAME);
  resetButton.classList.remove(HIDDEN_CLASSNAME);
  resetButton.addEventListener("click", onClickResetButton);
}