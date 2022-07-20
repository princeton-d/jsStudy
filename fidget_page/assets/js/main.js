'use strict';
/*
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
  cursorOff(); // 기본 커서를 지운다
  toggleView(welcomePageInput); //
  makeCursor(cursorText);
  toggleView(menuBox)
  openGate()

  document.addEventListener('mousemove', mouseMove);
}
function resetContent(event) {
  if (event.target === contentsArea) {
    removeTetris()
    removeCalculator()
    removeInstakilogram()
    contentsArea.classList.add('off-view')
    morseCodeArea.classList.add('off-view')
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




// calculator
// DOM
const calculatorBox = document.querySelector('.calculator-box')
const calculatorArea = document.querySelector('.calculator-area')
const calculatorDisplay = document.querySelector('.calculator-display')

// setting
// variables
// functions
function handleCalculatorBox() {
  toggleView(contentsArea)
  calculatorArea.style.display = 'flex';
  onBler(calculatorArea, 0.4)
}
function removeCalculator() {
  calculatorArea.style.display = 'none';
}
// event handling
calculatorBox.addEventListener('click', handleCalculatorBox)
*/



// instakilogram
// DOM
const instakilogramArea = document.querySelector('.instakilogram-area');
const instakilogramBox = document.querySelector('.instakilogram-box')
const instakilogramLoginForm = document.querySelector('.instakilogram-login-form');
const instakilogramIdInput = document.querySelector('.instakilogram-id-input');
const instakilogramPasswordInput = document.querySelector('.instakilogram-password-input');
const instakilogramLoginButton = document.querySelector('.instakilogram-login-button');
const loginErrorText = document.querySelector('.login-error-text');
const savedId = document.querySelector('.saved-id');


const hartButton = document.querySelector('.hart-button');
const commentButton = document.querySelector('.comment-button');
const telegramButton = document.querySelector('.telegram-button');
const bookmarkButton = document.querySelector('.bookmark-button');
const detailViewText = document.querySelector('.detail-view-text');
const instaContentsText = document.querySelector('.insta-contents-text');
const likeCount = document.querySelector('.like-count');

// setting
const LOGIN_ID = 'kingGodEmperorWebsteak';
const LOGIN_PASSWORD = 'I want to get a job.';


let INSTA_LIKE = 30;
// variables
// functions
function handleInstakilogramArea() {
  toggleView(contentsArea)
  instakilogramArea.style.display = 'flex';
  onBler(instakilogramArea, 0.4)
}
function removeInstakilogram() {
  instakilogramArea.style.display = 'none';
}
function showSavedId() { // 저장된 아이디 비밀번호를 화면에 보여줌
  savedId.style.display = 'block'
}
function hideSavedId() { // 저장된 아이디 비밀번호를 화면에서 숨김
  savedId.style.display = 'none'
}
function stopFocusOut() { // FocusOut 이벤트를 중지시켜 아이디 비밀번호 블럭을 클릭할 수 있게 만듦
  instakilogramIdInput.removeEventListener('focusout', hideSavedId);
}
function printIdAndPassword() { // 아이디 비밀번호 칸에 저장된 아이디 비밀번호를 입력한다.
  instakilogramIdInput.value = LOGIN_ID;
  instakilogramPasswordInput.value = LOGIN_PASSWORD;
  savedId.style.display = 'none' // 저장된 아이디 비밀번호 디스플플레이 숨김
  checkActivatingButton() // 로그인버튼 활성화여부 체크
  return instakilogramIdInput.addEventListener('focusout', hideSavedId); // focusout 이벤트를 다시 활성한다.
}
function makeHideSavedIdEvent() { // focusout 이벤트를 활성화한다.
  return instakilogramIdInput.addEventListener('focusout', hideSavedId);
}
function checkActivatingButton() { // id가 5글자 이상, password가 8글자 이상
  if (instakilogramIdInput.value.length >= 5 && instakilogramPasswordInput.value.length >= 8) {
    activatingButton(); // 로그인버튼 활성화
  } else {
    unActivatingButton() // 로그인버튼 비활성화
  };
}
function activatingButton() {
  instakilogramLoginButton.style.background = 'rgba(0, 149, 246, 1)' // 로그인버튼 색깔을 활성화 색깔로
  return instakilogramLoginForm.addEventListener('submit', checkLoginInfo) // submit 이벤트가 발생하면 로그인정보를 체크한다.
}
function unActivatingButton(e) {
  instakilogramLoginButton.style.background = 'rgba(0, 149, 246, 0.3)' // 로그인버튼 색깔을 비활성화 색깔로
  hideLoginErrorText() // 로그인 오류 텍스트 숨김
  return instakilogramLoginForm.removeEventListener('submit', checkLoginInfo)
}
function checkLoginInfo(e) {
  e.preventDefault();
  if (instakilogramIdInput.value === LOGIN_ID && instakilogramPasswordInput.value === LOGIN_PASSWORD) { // 아이디와 비밀번호가 일치한다면
    login()
  } else {
    showLoginErrorText() // 로그인 오류 텍스트 출력
  }
}
function showLoginErrorText() { // 로그인 오류 텍스트 출력
  loginErrorText.style.display = 'block' // none이었던 display를 block로 바꿈
}
function hideLoginErrorText() { // 로그인 오류 텍스트 감추기
  loginErrorText.style.display = 'none' // block었던 display를 none으로 바꿈
}
function eventDefault(e) {
  e.preventDefault();
}
function login() {

}

function handleButton(e) {
  e.target.classList.toggle('fa-regular')
  e.target.classList.toggle('fa-solid')
  checkLikeCount() // 좋아요 숫자 컨트롤
}
function checkLikeCount() { // 버튼 아이콘에 특정 클레스명이 있으면 좋아요 숫자를 더하거나 빼줌
  hartButton.classList.contains('fa-regular') ? INSTA_LIKE -= 1 : INSTA_LIKE += 1;
  likeCount.innerHTML = `${INSTA_LIKE}`;
}
function onDetailView() {
  detailViewText.style.display = 'none'; // 더보기 텍스트 숨김
  instaContentsText.style.display = 'block'; // display: -webkit-box 상태를 block로 바꿔줌
}
// event handling
// instakilogramBox.addEventListener('click', handleInstakilogramArea) // 인스타킬로그램 버튼 클릭하면 화면에 로그인페이지 나타남
// instakilogramLoginForm.addEventListener('keyup', checkActivatingButton) // 로그인 버튼 활성화 여부를 점검함
// instakilogramIdInput.addEventListener('focus', showSavedId); // 저장된 아이디 비밀번호를 화면에 보여줌
// instakilogramIdInput.addEventListener('focusout', hideSavedId); // 저장된 아이디 비밀번호를 화면에서 숨김
// savedId.addEventListener('mouseover', stopFocusOut); // FocusOut 이벤트를 중지시켜 아이디 비밀번호 블럭을 클릭할 수 있게 만듦
// savedId.addEventListener('mouseout', makeHideSavedIdEvent); // focusout 이벤트를 활성화한다.
// savedId.addEventListener('click', printIdAndPassword); // 아이디 비밀번호 칸에 저장된 아이디 비밀번호를 입력한다.
// instakilogramLoginForm.addEventListener('submit', eventDefault);

hartButton.addEventListener('click', handleButton); // 좋아요버튼 반응
bookmarkButton.addEventListener('click', handleButton) // 북마크버튼 반응
commentButton.addEventListener('mouseup', () => { commentButton.style.transform = 'scale(1)'; }); // 코멘트 버튼 mouseup 하면 크기 돌아옴
commentButton.addEventListener('mousedown', () => { commentButton.style.transform = 'scale(0.9)'; }); // 코멘트 버튼 mouse 하면 크기 0.9배
commentButton.addEventListener('mouseout', () => { commentButton.style.transform = 'scale(1)'; }); // 코멘트 버튼 mouseout 하면 크기 돌아옴
detailViewText.addEventListener('click', onDetailView) // 더보기 버튼 클릭 -> 게시글 펼쳐짐