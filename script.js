const buttons = document.querySelectorAll('button');
const display = document.querySelector('.on-screen-text');
const clearButton = document.querySelector('button.clear');
const delButton = document.querySelector('button.delete');



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.value;
    });
    clear();
})

backspace();

function clear() {
    clearButton.addEventListener('click', () => {
        display.textContent = "";
    });
}

function backspace() {
    delButton.addEventListener('click', () => {
        display.textContent = display.textContent.slice(0, -1);
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