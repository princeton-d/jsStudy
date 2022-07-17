'use strict';
// variable

// DOM
const contentsArea = document.querySelector('.contents-area')
const welcomePageForm = document.querySelector('.welcome-page');
const welcomePageInput = document.querySelector('.welcome-page__input');
const menuBox = document.querySelector('.menu-box');
const morseCodeBox = document.querySelector('.morse-code-box');
const gate = document.querySelector('.open-gate')

// event
welcomePageForm.addEventListener('submit', handleWelcomeInput);
contentsArea.addEventListener('click', resetContent)

function handleWelcomeInput(e) {
  const cursorText = welcomePageInput.value;
  e.preventDefault();
  cursorOff();
  toggleView(welcomePageInput);
  makeCursor(cursorText);
  toggleView(menuBox)
  openGate()

  document.addEventListener('mousemove', mouseMove);
}
function resetContent(event) {
  if (event.target === contentsArea) {
    removeTetris()
    contentsArea.classList.add('off-view')
    morseCodeArea.classList.add('off-view')
    // toggleView(contentsArea)
    // toggleView(morseCodeArea)
  }
}
function openGate() {
  gate.style.animation = 'blur-out 1s alternate ease-in'
  gate.style.opacity = 0;
}
function cursorOff() {
  document.body.setAttribute('class', 'cursor-off');
}
function toggleView(toOnPage) {
  toOnPage.classList.toggle('off-view')
}
function makeCursor(cursorText) {
  const push = document.createElement('span');
  push.setAttribute('class', 'cursor-in');
  push.innerText = cursorText;
  document.body.appendChild(push);
}
function onBler(target, s) {
  target.style.opacity = 1;
  target.style.animation = `blur ${s}s alternate ease-in`;
}
function outBler(target, s) {
  target.style.opacity = 0;
  target.style.animation = `blur-out ${s}s alternate ease-in`;
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

// event
morseCodeBox.addEventListener('click', handleMorseCodeArea)
morseInputArea.addEventListener('keyup', textToMorse)
morseOutputArea.addEventListener('keydown', inputRestriction)

function handleMorseCodeArea() {
  toggleView(contentsArea)
  toggleView(morseCodeArea)
  onBler(morseCodeArea, 0.4)
}
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


// tetris
// DOM
const tetrisBox = document.querySelector('.tetris-box')
const tetrisArea = document.querySelector('.tetris-area')
const playground = document.querySelector('.playground > ul')
const gameText = document.querySelector('.game-text')
const restartButton = document.querySelector('.game-text > button')

// setting
const GAME_ROWS = 15;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
  square: [
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
  ],
  bar: [
    [[1, 0], [2, 0], [3, 0], [4, 0]],
    [[2, -1], [2, 0], [2, 1], [2, 2]],
    [[1, 0], [2, 0], [3, 0], [4, 0]],
    [[2, -1], [2, 0], [2, 1], [2, 2]],
  ],
  tree: [
    [[1, 0], [0, 1], [1, 1], [2, 1]],
    [[1, 0], [0, 1], [1, 1], [1, 2]],
    [[2, 1], [0, 1], [1, 1], [1, 2]],
    [[2, 1], [1, 2], [1, 1], [1, 0]],
  ],
  zee: [
    [[0, 0], [1, 0], [1, 1], [2, 1]],
    [[0, 1], [1, 0], [1, 1], [0, 2]],
    [[0, 1], [1, 1], [1, 2], [2, 2]],
    [[2, 0], [2, 1], [1, 1], [1, 2]],
  ],
  elLeft: [
    [[0, 0], [0, 1], [1, 1], [2, 1]],
    [[1, 0], [1, 1], [1, 2], [0, 2]],
    [[0, 1], [1, 1], [2, 1], [2, 2]],
    [[1, 0], [2, 0], [1, 1], [1, 2]],
  ],
  elRight: [
    [[1, 0], [2, 0], [1, 1], [1, 2]],
    [[0, 0], [0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [2, 1], [2, 2]],
  ],
}

const movingItem = {
  type: '',
  direction: 0,
  top: 0,
  left: 3,
};



// functions
function handleTetrisArea() {
  toggleView(contentsArea)
  tetrisArea.style.display = 'flex';
  onBler(tetrisArea, 0.4)
  init()
}
function init() {
  gameText.style.display = 'none';
  tempMovingItem = { ...movingItem };
  for (let i = 0; i < GAME_ROWS; i++) {
    prependNewLine()
  }
  generateNewBlock()
}
function prependNewLine() {
  const li = document.createElement('li');
  const ul = document.createElement('ul');
  for (let j = 0; j < 10; j++) {
    const matrix = document.createElement('li');
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);
}
function renderBlocks(moveType = '') {
  const { type, direction, top, left } = tempMovingItem;
  const movingBlock = document.querySelectorAll('.moving')
  movingBlock.forEach(moving => {
    moving.classList.remove(type, 'moving');
  })
  BLOCKS[type][direction].some(block => {
    const x = block[0] + left;
    const y = block[1] + top;
    const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
    const isAvailable = checkEmpty(target);
    if (isAvailable) {
      target.classList.add(type, 'moving');
    } else {
      tempMovingItem = { ...movingItem }
      if (moveType === 'retry') {
        clearInterval(downInterval)
        showHameOverText()
      }
      setTimeout(() => {
        renderBlocks('retry')
        if (moveType === 'top') {
          seizeBlock()
        }
      }, 0)
      return true;
    }
  })
  movingItem.left = left;
  movingItem.top = top;
  movingItem.direction = direction;
}
function seizeBlock() {
  const movingBlock = document.querySelectorAll('.moving')
  movingBlock.forEach(moving => {
    moving.classList.remove('moving');
    moving.classList.add('seized');
  })
  checkMatch()
}
function checkMatch() {
  const childNodes = playground.childNodes;
  childNodes.forEach(child => {
    let matched = true;
    child.children[0].childNodes.forEach(li => {
      if (!li.classList.contains('seized')) {
        matched = false;
      }
    })
    if (matched) {
      child.remove();
      prependNewLine();
    }
  })
  generateNewBlock()
}
function generateNewBlock() {

  clearInterval(downInterval);
  downInterval = setInterval(() => {
    moveBlock('top', 1)
  }, duration)

  const blockArray = Object.entries(BLOCKS);
  const randomIndex = Math.floor(Math.random() * blockArray.length);
  movingItem.type = blockArray[randomIndex][0];
  movingItem.top = 0;
  movingItem.left = 3;
  movingItem.direction = 0;
  tempMovingItem = { ...movingItem };
  renderBlocks()
}
function checkEmpty(target) {
  if (!target || target.classList.contains('seized')) {
    return false;
  }
  return true;
}
function moveBlock(moveType, amount) {
  tempMovingItem[moveType] += amount;
  renderBlocks(moveType);
}
function changeDirection() {
  const direction = tempMovingItem.direction;
  direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
  renderBlocks();
}
function dropBlock() {
  clearInterval(downInterval);
  downInterval = setInterval(() => {
    moveBlock('top', 1)
  }, 5);
}
function showHameOverText() {
  clearInterval(downInterval);
  gameText.style.display = 'flex'
}
function removeTetris() {
  playground.innerHTML = '';
  clearInterval(downInterval);
  tetrisArea.style.display = 'none';
}

// event handling
tetrisBox.addEventListener('click', handleTetrisArea)
document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 39: moveBlock('left', 1);
      break;
    case 37: moveBlock('left', -1);
      break;
    case 40: moveBlock('top', 1);
      break;
    case 38:
      changeDirection();
      break;
    case 32: dropBlock();
      break;
    default:
      break;
  }
})

restartButton.addEventListener('click', () => {
  playground.innerHTML = '';
  gameText.style.display = 'none';
  init();
})