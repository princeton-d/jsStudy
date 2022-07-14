// DOM
const main = document.querySelector('main');
const gameOverWindow = document.querySelector('.game-over');
const gameClearWindow = document.querySelector('.game-clear');
const playStopBtn = document.querySelector('.play-stop-button');
const timeLimitBox = document.querySelector('.timelimit-box');
const scoreBox = document.querySelector('.score-box');
const itemArea = document.querySelector('.item-area');
const btnImageChange = document.querySelector('#play_stop_btn_change');

// let, const
let limitTime = 10;
let score = 10;

// event
playStopBtn.addEventListener('click', startGame);

// function
function startGame(event) {
  if (startSituation() === 'start' || event === 'start') {
    changeBtnImage()
    makeItems()
    printScore()
    baseTimeSetting()
    gameOverWindow.classList.add('hidden')
  } else {
    stopGame()
  }
}
function stopGame(event) {
  if (startSituation() === 'stop' || event === 'stop') {
    changeBtnImage();
    removeItem();
    removeScore();
    removeTimeSetting();
  }
}
function gameOver(event) {
  changeBtnImage(event);
  removeItem(event);
  removeScore();
  removeTimeSetting();
  gameOverWindow.classList.remove('hidden')
}
function changeBtnImage(event) {
  btnImageChange.innerHTML === 'play_arrow' ? btnImageChange.innerHTML = 'stop' : btnImageChange.innerHTML = 'play_arrow';
}
function makeItems() {
  for (let i = 0; i < 10; i++) {
    itemArea.innerHTML += `<img src="assets/img/carrot.png" onclick="removeCarrot(event)" class="carrot" style="left: ${RandomPlaceX()}px; bottom: ${RandomPlaceY()}px;">`;
    itemArea.innerHTML += `<img src="assets/img/bug.png" onclick="gameOver(event)" class="bug" style="left: ${RandomPlaceX()}px; bottom: ${RandomPlaceY()}px;">`;
  }
}
function printScore() {
  score = 10;
  scoreBox.innerHTML = score;
}
function baseTimeSetting() {
  timeLimitBox.innerHTML = limitTime
  let count = setInterval(timeCheck, 1000);
  function timeCheck() {
    timeLimitBox.innerHTML = limitTime - 1;
    limitTime--
    if (limitTime === 0) {
      clearInterval(count);
      timeLimitBox.innerHTML = '';
      limitTime = 10;
    }
  }
}
function removeItem() {
  itemArea.innerHTML = '';
}
function removeScore() {
  scoreBox.innerHTML = '';
  limitTime = 1;
}
function removeTimeSetting() {
  timeLimitBox.innerHTML = '';
}
function RandomPlaceX() {
  return Math.floor(Math.random() * 750);
}
function RandomPlaceY() {
  return Math.floor(Math.random() * 170);
}
function startSituation() {
  if (btnImageChange.innerHTML === 'play_arrow') {
    return 'start';
  } else {
    return 'stop';
  }
}
function removeCarrot(event) {
  itemArea.removeChild(event.target)
  scoreBox.innerHTML = score -= 1;
}