'use strict';
// variable

// DOM
const welcomePageForm = document.querySelector('.welcome-page');
const welcomePageInput = document.querySelector('.welcome-page__input');

// event
welcomePageForm.addEventListener('submit', handleWelcomeInput);

function handleWelcomeInput(e) {
  const cursorText = welcomePageInput.value;
  e.preventDefault();
  cursorOff();
  offView(welcomePageInput);
  makeCursor(cursorText);
  onView(morseCodeArea)

  document.addEventListener('mousemove', mouseMove);
}
function cursorOff() {
  document.body.setAttribute('class', 'cursor-off');
}
function offView(toHidePage) {
  toHidePage.setAttribute('class', 'off-view');
}
function onView(toOnPage) {
  toOnPage.classList.remove('off-view')
}
function makeCursor(cursorText) {
  const push = document.createElement('span');
  push.setAttribute('class', 'cursor-in');
  push.innerText = cursorText;
  document.body.appendChild(push);
}
function mouseMove(e) {
  const cursor = document.querySelector('.cursor-in');
  cursor.style.left = `${e.pageX + 5}px`;
  cursor.style.top = `${e.pageY + 5}px`;
}



// morse code part
const morseCodeArea = document.querySelector('.morse-code-area')
const morseInputForm = document.querySelector('.morse-input-form');
const morseInputArea = document.querySelector('.morse-input-area');
const morseOutputArea = document.querySelector('.morse-output-area');

const morseCode = { 0: '-----', 1: '·----', 2: '··---', 3: '···--', 4: '····-', 5: '·····', 6: '-····', 7: '--···', 8: '---··', 9: '----·', a: '·--', b: '-···', c: '-·-·', d: '-··', e: '·', f: '··-·', g: '--·', h: '····', i: '··', j: '·---', k: '-·-', l: '·-··', m: '--', n: '-·', o: '---', p: '·--·', q: '--·-', r: '·-·', s: '···', t: '-', u: '··-', v: '···-', w: '·--', x: '-··-', y: '-·--', z: '--··', '\u00a0': ' ', };

morseInputArea.addEventListener('keyup', textToMorse)
morseOutputArea.addEventListener('keydown', inputRestriction)

function inputRestriction(e) {
  e.preventDefault()
}
function textToMorse(e) {
  e.preventDefault()
  const inputText = morseInputArea.value.split('').map(String)
  changedText(inputText)
}
function changedText(inputText) {
  for (let i = 0; i < inputText.length; i++) {
    inputText[i] = morseCode[inputText[i]];
  }
  outPutMorse(inputText)
}
function outPutMorse(inputText) {
  let outPutText = '';
  for (let i = 0; i < inputText.length; i++) {
    inputText[i] === undefined ? outPutText += '\u00a0\u00a0\u00a0\u00a0\u00a0' : outPutText += `${inputText[i]} `
  }
  morseOutputArea.innerText = outPutText;
}