function operate(operator, num1, num2){
    let result;
    switch(operator){
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case 'x':
            result = multiply(num1,num2);
            break;
        case '÷':
            result = divide(num1,num2);
            break;
    }
    return result;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let tmp, num1, num2, result = '';
let operator = '';

//Display numbers
const display = document.querySelector('.display');
let digitButtons = document.querySelectorAll('.digit').forEach(btn => btn.addEventListener('click', function(){
    if(display.innerHTML === '0'|| operator !== '' || result !== ''){
        displayNum(btn.innerHTML);
    } else {
        display.innerHTML += btn.innerHTML;
    }
    tmp = display.innerHTML;
}));

//Clear display
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(){
    displayNum(0);
    resetVariables();
})

//Calculator operators
const operatorButtons = document.querySelectorAll('.operator').forEach(btn => btn.addEventListener('click', function(){
    if(operator != ''){
        num2 = tmp;
        result = operate(operator, parseFloat(num1), parseFloat(num2));
        displayNum(result);
        num1 = result;
        num2 = ''; 
    } else {
        num1 = tmp;
        tmp = '';
    }
    operator = btn.innerHTML;
}));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', function(){
    num2 = tmp;
    result = operate(operator, parseFloat(num1), parseFloat(num2));
    num1 = '';
    num2 = '';
    displayNum(result);
    tmp = result;
    operator = '';
});


function displayNum(str){
    display.innerHTML = Math.round(parseFloat(str) * 10000000) / 10000000;
}

function resetVariables(){
    tmp = '';
    num1 = '';
    num2 = '';
    result = '';
    operator = '';
}