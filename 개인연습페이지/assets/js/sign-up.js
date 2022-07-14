//querySelector
const signUpForm = document.querySelector("#sign-up-form");
const usernameInput = document.querySelector("#username-input");
const userAgeInput = document.querySelector("#userage-input");
const userIdInput = document.querySelector("#userid-input");
const userPasswordInput = document.querySelector("#userpassword-input");
const confirmPasswordInput = document.querySelector("#confirmpassword-input");

//변수

//event
signUpForm.addEventListener("submit", checkConfirmPassword);

//function
function checkConfirmPassword(event) {
  event.preventDefault();
  confirmPasswordInput.value === userPasswordInput.value ? onSignUpSubmit(event) : alert("비밀번호가 일치하지 않습니다");
}
function onSignUpSubmit(event) {
  event.preventDefault();
  //이름, 나이, 아이디, 비밀번호를 로컬스토리지에 저장
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("userage", userAgeInput.value);
  localStorage.setItem("userid", userIdInput.value);
  localStorage.setItem("userpassword", userPasswordInput.value);
  //완료안내, 시작페이지 이동
  alert('회원가입 완료')
  window.location.href = '../index.html';
}
