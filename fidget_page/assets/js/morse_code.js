'use strict';
// DOM
const morseCodeArea = document.querySelector('.morse-code-area')
const morseInputForm = document.querySelector('.morse-input-form');
const morseCodeBox = document.querySelector('.morse-code-box');
const morseInputArea = document.querySelector('.morse-input-area');
const morseOutputArea = document.querySelector('.morse-output-area');
// setting
// variables
const morseCode = { 0: '-----', 1: '·----', 2: '··---', 3: '···--', 4: '····-', 5: '·····', 6: '-····', 7: '--···', 8: '---··', 9: '----·', a: '·--', b: '-···', c: '-·-·', d: '-··', e: '·', f: '··-·', g: '--·', h: '····', i: '··', j: '·---', k: '-·-', l: '·-··', m: '--', n: '-·', o: '---', p: '·--·', q: '--·-', r: '·-·', s: '···', t: '-', u: '··-', v: '···-', w: '·--', x: '-··-', y: '-·--', z: '--··', };
// function
function handleMorseCodeArea() {
  toggleDisplay(contentsArea, 'flex');
  toggleDisplay(morseCodeArea, 'flex');
}
function textToMorse() { // 입력한 text를 1글자씩 배열로 만듦
  const inputText = morseInputArea.value.split('').map(String)
  changedText(inputText)
}
function changedText(inputText) { // text를 모스부호로 만듦
  for (let i = 0; i < inputText.length; i++) {
    inputText[i] = morseCode[inputText[i]]; // 기존 배열에 해당하는 모스부호를 할당함
  }
  outPutMorse(inputText)
}
function outPutMorse(inputText) { // 모스부호 출력
  let outPutText = '';
  for (let i = 0; i < inputText.length; i++) { // 배열에 설정한 모스부호(0~9, a~z)가 없으면 ✓ 출력
    inputText[i] === undefined ? outPutText += ' ✓ ' : outPutText += `${inputText[i]} `
  }
  morseOutputArea.innerText = outPutText;
}
// event handling
morseCodeBox.addEventListener('click', handleMorseCodeArea)
morseInputArea.addEventListener('keyup', textToMorse)