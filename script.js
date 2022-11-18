const numbers = document.querySelectorAll('button.numbers');
const operations = document.querySelectorAll('button.operations');
const currentNumber = document.querySelector('.currentNum');
const previousNumber = document.querySelector('.previousNum');
const clearButton = document.querySelector('button.clear');
const delButton = document.querySelector('button.delete');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentNumber.textContent += number.value;
    });
    clear();
})

backspace();
getOperator();
function getOperator() {
    let operator = "";
    operations.forEach((operation) => {
        operation.addEventListener('click', () => {
            operator = operation.textContent;
            console.log(operator);
        });
    });
}


function clear() {
    clearButton.addEventListener('click', () => {
        currentNumber.textContent = "";
        previousNumber.textContent = "";
    });
}

function backspace() {
    delButton.addEventListener('click', () => {
        currentNumber.textContent = currentNumber.textContent.slice(0, -1);
    });
}

function compute(operator) {
    switch (operator) {
        case '+':
            add();
            break
        case '-':
            subtract();
            break
        case '*':
            multiply();
            break
        case '/':
            divide();
            break
        default:
            break;
    }
}

function add(previousNumber, currentNumber) {
    return previousNumber + currentNumber;
}

function subtract(previousNumber, currentNumber) {
    return previousNumber - currentNumber;
}

function multiply(previousNumber, currentNumber) {
    return previousNumber * currentNumber;
}

function divide(previousNumber, currentNumber) {
    return previousNumber / currentNumber;
}