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
var firstMathNumber;
var secondMathNumber;
var pastCalculationNumber = 0;




function mainCalculator(event) {
    if (["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(event.target.innerText)) {
        {//sets 2nd # if operationnotpres by adding the clickedbutton value to the array2ndnum
            if (operation != '') {
                calcNumber['secondNumber'].push(event.target.innerText);
                secondMathNumber = calcNumber['secondNumber'].join('');
                displayscreennode.innerText = (firstMathNumber + operation + secondMathNumber);
                console.log('secondclick');
                //when pastcalc there it does this after the second#clicked
                if (pastCalculationNumber != '') {
                    firstMathNumber = Number(pastCalculationNumber);
                    secondMathNumber = Number(event.target.innerText);
                    displayscreennode.innerText = operate(firstMathNumber, secondMathNumber, operation);
                    pastCalculationNumber = operate(firstMathNumber, secondMathNumber, operation);
                    console.log('finalcalwhencalcthere');
                }
            }
            // if oper wasnt present this means it the 1st click and so it sets that
            else {
                calcNumber['firstNumber'].push(event.target.innerText);
                firstMathNumber = calcNumber['firstNumber'].join('');
                displayscreennode.innerText = firstMathNumber;
                console.log('firstclick');
            }
        }
    }
    else if (['-', "/", "+", "-", "*"].includes(event.target.innerText)) {
        operation = event.target.innerText;
        console.log(operation + 'isoperation');
        if (pastCalculationNumber != '') {
            firstMathNumber = pastCalculationNumber;
        } else {
            console.log(firstMathNumber + 'fmn');
            console.log(secondMathNumber + 'smn');
            console.log(pastCalculationNumber + "pmn");
        }
        return operation;
    }
    else if (event.target.innerText == '=' || ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].includes(event.target.innerText)) {
        //does the initial calc when no other result there
        firstMathNumber = Number(firstMathNumber);
        secondMathNumber = Number(secondMathNumber);
        displayscreennode.innerText = operate(firstMathNumber, secondMathNumber, operation);
        pastCalculationNumber = operate(firstMathNumber, secondMathNumber, operation);
        console.log('finalcalcnootheranwser');
        console.log(firstMathNumber);
        console.log(secondMathNumber);
        console.log(pastCalculationNumber);
        }
    //goesherewhenclearclicked or dot
    else  {
        displayscreennode.innerText = event.target.innerText;
        calcNumber['firstNumber'].length = 0;
        calcNumber['secondNumber'].length = 0;
        operation = '';
        console.log('clear');
        displayscreennode.innerText = 'Enter Some #\'s';
        pastCalculationNumber = 0;

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


