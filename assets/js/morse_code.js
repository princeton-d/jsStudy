'use strict';
// querySelector
const morseInputForm = document.querySelector('#morse-input-form')
const morseInputInput = document.querySelector('#morse-input-input')
const morseOutputArea = document.querySelector('#morse-output-area')

// 변수, 상수
let morseArr;

// morseCodeArea
const morseCode = { '\u00a0': ' ', 1: '·----', 2: '··---', 3: '···--', 4: '····-', 5: '·····', 6: '-····', 7: '--···', 8: '---··', 9: '----·', a: '·--', b: '-···', c: '-·-·', d: '-··', e: '·', f: '··-·', g: '--·', h: '····', i: '··', j: '·---', k: '-·-', l: '·-··', m: '--', n: '-·', o: '---', p: '·--·', q: '--·-', r: '·-·', s: '···', t: '-', u: '··-', v: '···-', w: '·--', x: '-··-', y: '-·--', z: '--··', zero: '-----', }

// event
morseInputForm.addEventListener('submit', startPreventDefault);

function startPreventDefault(event) {
  event.preventDefault();
  morseText()
}
function morseText() {
  const morseArr = morseInputInput.value.split('').map(String)
  changedMorse()

  function changedMorse() {
    for (let i = 0; i < morseArr.length; i++) {
      morseArr[i] = morseCode[morseArr[i]];
    }
    outPutMorse(morseArr)

    function outPutMorse(morse) {
      let outPutText = '';
      for (let i = 0; i < morse.length; i++) {
        morse[i] === undefined ? outPutText += '\u00a0\u00a0\u00a0\u00a0\u00a0' : outPutText += `${morse[i]} `
      }
      morseOutputArea.innerText = outPutText;
      console.log('good')
    }
  }
}