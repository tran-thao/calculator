function operate(operator, num1, num2){
    let result;
    switch(operator){
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
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

let tmp;

//Display numbers
const display = document.querySelector('.display');
let digitButtons = document.querySelectorAll('.digit').forEach(btn => btn.addEventListener('click', function(){
    if(display.innerHTML == '0'){
        display.innerHTML = btn.innerHTML;
    } else {
        display.innerHTML += btn.innerHTML;
        tmp = display.innerHTML;
    }
}));

//Clear display
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(){
    display.innerHTML = 0;
})
