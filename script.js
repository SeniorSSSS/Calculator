

// Added to select screen area in html and then add the display screen div to it
const calculatorscreen = document.querySelector("calculatorscreen");
const displayscreennode = document.createElement('div');
displayscreennode.id = "displayscreen";
calculatorscreen.appendChild(displayscreennode);
displayscreennode.innerText = "Enter Some #\'s";

// Look for buttons in html so i can work on them
const buttonnode = document.querySelectorAll('button');
const buttonnodearray = Array.from(buttonnode);
for (var i = 0; i < buttonnodearray.length; i++) {
    buttonnodearray[i].addEventListener('click', mainCalculator);
}

// State variables
var calcNumber = {
    firstNumber: [],
    secondNumber: [],
}
var operation = '';
var pastCalculationNumber;
var firstMathNumber;
var secondMathNumber;


function mainCalculator(event) {
    if (["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(event.target.innerText)) {
        displayscreennode.innerText = event.target.innerText;
        if (operation != '') {
            displayscreennode.innerText = (calcNumber['firstNumber'] + operation +calcNumber['secondNumber']);
            calcNumber['secondNumber'].push(event.target.innerText);
            secondMathNumber = calcNumber['secondNumber'].join('');
            displayscreennode.innerText = (firstMathNumber + operation +secondMathNumber);
        }
        else {
            calcNumber['firstNumber'].push(event.target.innerText);
            firstMathNumber = calcNumber['firstNumber'].join('');
            displayscreennode.innerText = firstMathNumber;
        }
    }
    else if (['-', "/", "+", "-", "*"].includes(event.target.innerText)) {
        operation =event.target.innerText;
        console.log(operation + 'isoperation');
        return operation;
    }
    else if (event.target.innerText == '=') {
        firstMathNumber = Number(firstMathNumber);
        secondMathNumber = Number(secondMathNumber);
        console.log(operation + 'whyy');
        displayscreennode.innerText = operate(firstMathNumber,secondMathNumber, operation);
    }
    else if (event.target.innerText = 'clear') {
        displayscreennode.innerText = event.target.innerText;
        calcNumber['firstNumber'].length = 0;
        calcNumber['secondNumber'].length = 0;
        operation = '';
        console.log('clear');
        displayscreennode.innerText = 'Enter Some #\'s';
        
    } else {
      alert ('happytime');
}
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return secondNumber === 0 ? "Can't divide by 0!" : firstNumber / secondNumber;;
}

function operate(firstNumber, secondNumber, operation) {
    switch (operation) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/': {
            return divide(firstNumber, secondNumber);
        }
    }
}


