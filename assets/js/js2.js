//querySelector
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");

//string
const CLASS_HIDDEN = "hidden";
const LOCALSTORAGE_USERNAME_KEY = "username";

//function
function onLoginSubmit(event) {
  const username = loginInput.value;
  //submit 이벤트 정지
  event.preventDefault();
  //로컬에 저장
  localStorage.setItem(LOCALSTORAGE_USERNAME_KEY, loginInput.value);
  //loginForm 숨기기
  loginForm.classList.add(CLASS_HIDDEN);
  //greeting 보이기
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(CLASS_HIDDEN);
}

//event
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(LOCALSTORAGE_USERNAME_KEY);
//로컬스토리지 username 키에 값이 없다면
if (savedUsername === null) {
  //loginForm 노출
  loginForm.classList.remove(CLASS_HIDDEN);
} else {
  //greeting 노출
  paintGreetings(savedUsername);
}
