//querySelector
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string const
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//function
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //submit 하면 hidden class 추가
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 username값 입력
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME); //submit 하면 hidden class 삭제, h1이 보임
}
const savedUsername = localStorage.getItem(USERNAME_KEY); //savedUsername : localStorage에 username값을 추가해줌

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //localStorage에 username값이 없으면 loginForm에 있는 hidden class를 지워서 html에서 보이게 해준다.
  loginForm.addEventListener("submit", onLoginSubmit); //loginForm submit event
} else {
  paintGreetings(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME); //localStorage에 username값이 있으면 loginForm을 html에서 display none 해준다.
}
