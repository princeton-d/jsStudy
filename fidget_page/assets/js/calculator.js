'use strict';
// DOM
const calculatorBox = document.querySelector('.calculator-box')
const calculatorArea = document.querySelector('.calculator-area')
const calculatorDisplay = document.querySelector('.calculator-display')
// setting
// variables
// functions
function handleCalculatorBox() {
  toggleDisplay(contentsArea, 'flex')
  toggleDisplay(calculatorArea, 'flex')
}
// event handling
calculatorBox.addEventListener('click', handleCalculatorBox)