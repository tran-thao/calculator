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
            if(num2 !== 0){
                result = divide(num1,num2);
            }
            else {
                alert("You CANNOT divide by 0!!")
            }
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

let tmp = '';
let num1 = '';
let result = '';
let num2 = '';
let operator = '';

//Display numbers
const display = document.querySelector('.display');
let digitButtons = document.querySelectorAll('.digit').forEach(btn => btn.addEventListener('click', function(){
    let curNum = display.innerHTML;
    if(btn.id === 'percent'){
        let temp = curNum/100;
        if(operator === '+' || operator === '-'){
            temp = num1*temp;
        }
        display.innerHTML = temp;
    } else if(btn.id === 'sign'){
        display.innerHTML = -display.innerHTML;
    } else if((curNum === '0' || (num2 === '' && tmp === '')) && btn.id !=='decimal') {
        displayNum(btn.innerHTML);
    } else {
        if(btn.id === 'decimal' && display.innerHTML.includes('.')) return
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
    if(num1 !== ''){
        handleCalculation();
        tmp='';
        num1 = result;
        num2 = '';
        result='';
    } else {
        num1 = tmp;
        tmp = '';
    }
    operator = btn.innerHTML;
}));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', function(){
        handleCalculation();
        num1 = '';
        num2 = '';
        tmp = result;
        operator = '';
});

function handleCalculation(){
    num2 = tmp;
    result = operate(operator, parseFloat(num1), parseFloat(num2));
    if(result !== '' && !isNaN(result)){
        displayNum(result);
    }
}

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
