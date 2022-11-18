const buttons = document.querySelectorAll('button');
const display = document.querySelector('.on-screen-text');
const clearButton = document.querySelector('button.clear');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.value;
    });
    clear();
})

const operator = {
    '+': add(),
    '-': subtract(),
    '*': multiply(),
    '/': divide(),
}

function clear() {
    clearButton.addEventListener('click', () => {
        display.textContent = " ";
    });
}

function operate(a, b, op) {

}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}