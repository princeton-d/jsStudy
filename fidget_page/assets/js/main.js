'use strict';
// DOM
const contentsArea = document.querySelector('.contents-area')
const welcomePageForm = document.querySelector('.welcome-page');
const welcomePageInput = document.querySelector('.welcome-page__input');
const menuBox = document.querySelector('.menu-box');
const gate = document.querySelector('.open-gate')
const cursor = document.querySelector('.cursor')
// setting
// variables
// function
function handleWelcomeInput(e) { // 처음 화면에 text를 submit 하면 컨텐츠박스를 노출시킴
  const cursorText = welcomePageInput.value; // input에 입력한 text값
  e.preventDefault();
  toggleDisplay(welcomePageForm, 'none'); // 초기화면의 display를 none으로 바꿈
  toggleDisplay(menuBox, 'flex'); // none이었던 메뉴박스의 display를 flex로 바꿈
  makeCursorText(cursorText); // 커서를 따라다니는 text를 만듦
  document.addEventListener('mousemove', mouseMove); // 마우스를 움직일 때마다 커서text가 따라다님
}
function resetContent(e) { // 컨텐츠 바깥영역을 클릭하면 모든 컨텐츠들을 초기화
  if (e.target === contentsArea) {
    toggleDisplay(morseCodeArea, 'none');
    removeTetris()
    toggleDisplay(calculatorArea, 'none')
    toggleDisplay(instakilogramArea, 'none')
    toggleDisplay(contentsArea, 'none');
  }
}
function toggleDisplay(target, state) { // display 컨트롤
  target.style.display = state;
}
function makeCursorText(cursorText) { // 커서 텍스트를 화면에 보여줌
  toggleDisplay(cursor, 'block')
  cursor.innerText = cursorText;
}
function mouseMove(e) { // 마우스 좌표 설정
  cursor.style.left = `${e.pageX + 1.3}px`;
  cursor.style.top = `${e.pageY + 1.3}px`;
}
// event handling
welcomePageForm.addEventListener('submit', handleWelcomeInput);
contentsArea.addEventListener('click', resetContent)