'use strict';

const cursorX = document.querySelector('#cursor_x');
const cursorY = document.querySelector('#cursor_y');
const cursorPointer = document.querySelector('#pointer');

document.addEventListener('mousemove', (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  cursorX.style.top = clientY + 'px';
  cursorY.style.left = clientX + 'px';
  cursorPointer.style.left = clientX + 'px';
  cursorPointer.style.top = clientY + 'px';
  cursorPointer.innerHTML = `X: ${clientX}px<br>Y: ${clientY}px`
})