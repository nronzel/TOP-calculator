const numbers = document.querySelectorAll('button.numbers');
const operations = document.querySelectorAll('button.operations');
const equals = document.querySelector('button.equals');
const currentNumber = document.querySelector('.currentNum');
const previousNumber = document.querySelector('.previousNum');
const clearButton = document.querySelector('button.clear');
const delButton = document.querySelector('button.delete');

let operator = "";

function nums() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            currentNumber.textContent += number.value;
        });
    });
}

function getOperator() {
    operations.forEach((operation) => {
        operation.addEventListener('click', () => {
            // if (operation != null) {
                operator = operation.textContent;
                previousNumber.textContent = `${currentNumber.textContent} ${operator}`;
                currentNumber.textContent = "";
                return operator;
            // } else {
            //     return;
            // }
        });
    });
}

function equal() {
    equals.addEventListener('click', () => {
        compute();
    })
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

function compute() {
    const prev = parseInt(previousNumber.textContent);
    const curr = parseInt(currentNumber.textContent);

    console.log(prev);
    console.log(operator);
    console.log(curr);

    let answer;
    if(isNaN(prev) || isNaN(curr)) return;
    switch (operator) {
        case '+':
            answer = prev + curr;
            break
        case '-':
            answer = prev - curr;
            break
        case 'x':
            answer = prev * curr;
            break
        case '÷':
            answer = prev / curr;
            break
        default:
            return;
    };

    currentNumber.textContent = answer;
    previousNumber.textContent = `${prev} ${operator} ${curr}`;
}

function main() {
    nums();
    getOperator();
    clear();
    backspace();
    equal();
}

main();