function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a -b;
}

function multiply(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '/':
            return div(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
    }
}

let curValue = 0;
let preValue = 0;
let result = 0;
let operator = ' ';

const buttons = document.querySelectorAll("button");
const displayc = document.querySelector(".displayc");
const displayp = document.querySelector(".displayp");

updateDisplay(operator);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => handleButton(button.id));
});

function handleButton(id) {
     switch (id) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (preValue > 0 && curValue > 0) {
                curValue = operate(operator, preValue, curValue);
                updateDisplay(operator);
            }
            preValue = curValue;
            curValue = 0;
            operator = id;
            updateDisplay(operator);
            
            break;
        case '=':
            if (operator == '') {
                break;
            }
            result = operate(operator, preValue, curValue);
            displayResult();
            reset();
            curValue = result;
            break;
        case 'clear':
            reset();
            updateDisplay(operator);
            break;
        default:
            handleNumber(id);
            break;
     }
}

function handleNumber(id) {
    curValue *= 10;
    curValue += Number(id);
    updateDisplay(operator);
}

function updateDisplay(operator) {
    displayp.textContent = preValue + " " + operator;
    displayc.textContent = curValue;
}

function displayResult() {
    displayp.textContent = preValue + " " + operator + " " + curValue + " =";
    displayc.textContent = result;
}

function reset() {
    curValue = 0;
    preValue = 0;
    operator = '';
}