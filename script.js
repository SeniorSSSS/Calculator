

// Added to select screen area in html and then add the display screen div to it
const calculatorscreen = document.querySelector("calculatorscreen");
const displayscreennode = document.createElement('div');
displayscreennode.id = "displayscreen";
calculatorscreen.appendChild(displayscreennode);
displayscreennode.innerText = "holdertexttilcalcsmade";

// LOok for buttons in html so i can work on them
const buttonnode = document.querySelectorAll('button');
const buttonnodearray = Array.from(buttonnode);
for (var i = 0; i < buttonnodearray.length; i++) {
    buttonnodearray[i].addEventListener('click', mainCalculator);
}

// State variables
var calcNumber = {
    firstNumber: '',
    secondNumber: '',
}
var operation = '';
var pastCalculationNumber;


function mainCalculator(event) {
    if (["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(event.target.innerText)) {
        displayscreennode.innerText = event.target.innerText;
        if (operation != '') {
            calcNumber['secondNumber'] = event.target.innerText;
            displayscreennode.innerText = (calcNumber['firstNumber'] + operation +calcNumber['secondNumber'])
        }
        else {
            calcNumber['firstNumber'] = event.target.innerText;
            displayscreennode.innerText = (calcNumber['firstNumber'] + operation +calcNumber['secondNumber'])
        }
        console.log(event.target.innerText);
        console.table(calcNumber);
    }
    else if (['-', "/", "+", "-", "*"].includes(event.target.innerText)) {
        operation =event.target.innerText;
        console.log(operation + 'isoperation');
        // "'" + event.target.innerText + "'"
        return operation;
    }
    else if (event.target.innerText = '=') {
        firstNumber = Number(calcNumber.firstNumber);
        secondNumber = Number(calcNumber.secondNumber);
        console.log(operation);
        //operation = '-';
        console.log(firstNumber + 'fin');
        console.log(secondNumber + 'sn');
        console.log(operation);
        console.log(operate(firstNumber,secondNumber, operation));
        displayscreennode.innerText = operate(firstNumber,secondNumber, operation);
    }
    else {
        displayscreennode.innerText = event.target.innerText;
        calcNumber['firstNumber']= '';
        calcNumber['secondNumber'] = '';
        operation = '';
        console.log('clear');
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


