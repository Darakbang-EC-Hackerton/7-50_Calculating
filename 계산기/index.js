let num1 = '';
let num2 = '';
let operator = '';
let outputNum = '';
let history = [];
let thisIndex = -1;

const inputField = document.querySelector('#input-field');
const buttons = document.querySelectorAll('.numBtn');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('#equalSign');
const reset = document.querySelector('#reset');
const change = document.querySelector('#change');
const prevExp = document.querySelector('#prevExp');
const historyExp = document.querySelector('#history');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const number = event.target.innerText;
        if (operator === '') {
            num1 += number;
            inputField.innerText = num1;
        } else {
            num2 += number;
            inputField.innerText = num1 + ' ' + operator + ' ' + num2;
        }
    });
});
operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        operator = event.target.innerText;
        inputField.innerText = num1 + ' ' + operator;
    });
});

function add(num1, num2) {return num1 + num2;}
function minus(num1, num2) {return num1 - num2;}
function multiply(num1, num2) {return num1 * num2;}
function power(num1, num2) {return num1 ** num2;}
function div(num1, num2) {return num2 === 0 ? '에러' : num1 / num2}
function mod(num1, num2) {return num2 == 0 ? '에러' : num1 % num2}

function calc (num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    outputNum = '';

    switch (operator) {
        case '+': outputNum = add(num1, num2); break;
        case '-': outputNum = minus(num1, num2); break;
        case 'x': outputNum = multiply(num1, num2); break;
        case '/': outputNum = divide(num1, num2); break;
        case '%': outputNum = mod(num1, num2); break;
        case '^': outputNum = power(num1, num2); break;
        default: outputNum = '에러';
    }
}

equalSign.addEventListener('click', (event) => {
    if (num1 && operator && num2) {
        calc(num1, operator, num2);

        const currentExp = `${num1} ${operator} ${num2} = ${outputNum}`;
        history.push(currentExp);
        thisIndex = history.length - 1;

        prevExp.innerText = inputField.innerText;
        inputField.innerText = outputNum;
        num1 = outputNum;
        num2 = '';
        operator = '';
    } else {
        inputField.innerText = '에러';
    }
});

reset.addEventListener('click', (event) => { 
    inputField.innerText = '';
    prevExp.innerText = '';
    num1 = ''; 
    num2 = ''; 
    operator = ''; 
    outputNum = '';
});
change.addEventListener('click', (event) => {
    if (num1 === '') {
        inputField.innerText = '에러';
    }
    else {
        num1 = -parseFloat(num1);
        inputField.innerText = num1;
    }
});
historyExp.addEventListener('click', (event) => {
    if (history.length > 0) {
        prevExp.innerText = history[thisIndex];
        inputField.innerText = ''; 
        thisIndex = currentIndex > 0 ? currentIndex - 1 : history.length - 1;
    } else {
        prevExp.innerText = '기록이 없습니다.';
    }
});

hamster.addEventListener('click', (event) => {
    prevExp.innerText = '행복한 하루';
    inputField.innerText = '보내세요';
});
