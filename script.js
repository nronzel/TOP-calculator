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