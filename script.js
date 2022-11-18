const buttons = document.querySelectorAll('button');
const display = document.querySelector('.on-screen-text');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.value;
    });
})



const operators = ['+','-','*','/'];




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