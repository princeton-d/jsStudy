function a(event) { console.log(event) }
// DOM area
const gameOverWindow = document.querySelector('.game-over');
const playStopButton = document.querySelector('.play-stop-button');
const timeLimitBox = document.querySelector('.timelimit-box');
const scoreBox = document.querySelector('.score-box');
const itemArea = document.querySelector('.item-area');

let score = 0;

// event area
playStopButton.addEventListener('click', changePlayBtnImg);


// function area
function changePlayBtnImg() {
  const btnImg = document.querySelector('.play-stop-button > span');
  if (btnImg.innerHTML === 'play_arrow') {
    btnImg.innerHTML = 'stop';
  } else {
    btnImg.innerHTML = 'play_arrow'
    gameStart()
  }
  timeoutTrigger();
  itemCreation();
}
function countdown(event) {
  let limitNum = 10;
  timeLimitBox.innerHTML = limitNum;
  if (event === 'stop') {
    limitNum = 0;
    timeLimitBox.innerHTML = timeLimitBox.innerHTML = '';
  }
  event === 'start' ? down = setInterval(count, 1000) : clearInterval(down);
  function count() {
    if (limitNum > 0) {
      timeLimitBox.innerHTML = limitNum -= 1;
    }
  }
}
function timeoutTrigger() {
  playStopButton.classList.toggle('stop-game');
  if (playStopButton.classList.contains('stop-game')) {
    countdown('pause')
  } else {
    countdown('start');
  }
}
function itemCreation() {
  if (playStopButton.classList.contains('stop-game') === false) {
    for (let i = 0; i < 10; i++) {
      itemArea.innerHTML += `<img src="assets/img/bug.png" class="bug" onclick="gameOver()" style="left: ${randomNumberX()}px; bottom: ${randomNumberY()}px;">`
      itemArea.innerHTML += `<img src="assets/img/carrot.png" class="bug" onclick="removeItem(event)" style="left: ${randomNumberX()}px; bottom: ${randomNumberY()}px;">`
    };
  } else {
    itemArea.innerHTML = '';
  }
}
function removeItem(event) {
  itemArea.removeChild(event.target);
  score++
  console.log(score)
  if (score === 10) {
    gameOver()
  }
}
function randomNumberX() {
  return Math.floor(Math.random() * 750);
}
function randomNumberY() {
  return Math.floor(Math.random() * 170);
}
function gameOver() {
  score = 10;
  gameOverWindow.classList.remove('hidden');
}
function gameStart() {
  gameOverWindow.classList.add('hidden');
}