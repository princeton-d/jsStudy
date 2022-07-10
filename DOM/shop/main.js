'use strict';
const contentTextInputForm = document.querySelector('#content_text_input_form')
const contentPlusInput = document.querySelector('#content_plus_input')
const textBox = document.querySelector('.text-box')
let deleteButton = document.querySelectorAll('.delete-button')

contentTextInputForm.addEventListener('submit', pushText)

function pushText(event) {
  const inputValue = contentPlusInput.value;
  contentPlusInput.value = ''
  contentPlusInput.focus();
  event.preventDefault();
  textBox.innerHTML += `
  <div class="content-box">
  <p class="content-text">${inputValue}</p>
  <button onclick="deleteText(event)" class="delete-button">delete</button>
</div>`
}
function deleteText(event) {
  textBox.removeChild(event.currentTarget.parentElement)
  console.log(event.currentTarget.parentElement)
}