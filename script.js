//Calculator operations
const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    'x': (num1, num2) => num1 * num2,
    '÷': (num1, num2) => num2 === 0 ? alert("You CANNOT divide by 0!!") : num1 / num2
};

//Variables storing values for calculations
let tmp = '';
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

//DOM elements
const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

//Event listeners
digitButtons.forEach(btn => btn.addEventListener('click', handleDigitInput));
operatorButtons.forEach(btn => btn.addEventListener('click', handleOperatorInput));
clearButton.addEventListener('click', handleClear);
equalsButton.addEventListener('click', handleEquals);
window.addEventListener('keydown', handleKeyDown);

//Handle number display
function handleDigitInput(digit){
    const btn = this;
    let curNum = display.textContent;

    if(btn.id === 'percent'){
        display.textContent = calculatePercentage(curNum);
    } else if(btn.id === 'sign'){
        display.textContent = -parseFloat(curNum);
    } else if(curNum === '0' || (num2 === '' && tmp === '')) {
        display.textContent = btn.textContent;
    } else if(btn.id === 'decimal' && curNum.includes('.')) {
        display.textContent = curNum
    } else {
        display.textContent = curNum + btn.textContent;
    }
    tmp = display.textContent;
}

//Clear display
function handleClear(){
    displayNum(0);
    resetVariables();
}

//Handle operator input
function handleOperatorInput(op){
    if(num1 === ''){
        num1 = tmp;
        tmp = '';
    } else {
        handleCalculation();
        tmp='';
        num1 = result;
        num2 = '';
        result='';
    }
    operator = this.textContent;
}

function handleEquals(){
    handleCalculation();
    num1 = '';
    num2 = '';
    tmp = result;
    operator = '';
}

function handleCalculation(){
    num2 = tmp;
    result = operate(operator, parseFloat(num1), parseFloat(num2));
    if(!isNaN(result)){
        displayNum(result);
    }
}

//Utility functions
function operate(operator, num1, num2) {
    return operations[operator](num1, num2);
}



function calculatePercentage(num) {
    const temp = (num / 100) * ((operator === '+' || operator === '-') ? num1 : 1);
    return temp.toString();
}

function displayNum(str){
    display.textContent = Math.round(parseFloat(str) * 10_000_000) / 10_000_000;
}

function resetVariables(){
    tmp = '';
    num1 = '';
    num2 = '';
    result = '';
    operator = '';
}

const convertOperator = {
    '/': '÷',
    '*': 'x',
    '-': '-',
    '+': '+',
  };
  
function handleKeyDown(e) {
    const key = e.key;
    
    if (/^\d$/.test(key)) {
      handleDigitInput.call({ textContent: key });
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleOperatorInput.call({ textContent: convertOperator[key] });
    } else if (key === 'Enter') {
      handleEquals();
    } else if (key === 'Escape') {
      handleClear();
    }
    e.preventDefault();
}