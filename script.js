const buttons = document.querySelectorAll("button");
buttons.forEach(groupAddEventListener);
let num1 = "";
let num2 = "";
let operatorSign = "";
let arrayNum2 = []; 
let arrayDisplay = [num1, operatorSign, num2, arrayNum2];

function add(x, y) {
    let addResult = x + y;
    return addResult;
}

function substract(x, y) {
    let substractResult = x - y;
    return substractResult;
}

function multiply(x, y) {
    let multiplyResult = x * y;
    return multiplyResult;
}

function divide(x, y) {
    let divideResult = x / y;
    if (y == 0) {
        return "I AM ERROR";
    } else {
        return divideResult;
    }
}

function operate(x, y, z) {
    x = Number(x);
    y = Number(y);
    let result;
    if (z === "+") {
        result = add(x, y);
    } else if (z === "-") {
        result = substract(x, y);
    } else if (z === "X") {
        result = multiply(x, y);
    } else if (z === "/") {
        result = divide(x, y);
    }
    return result;
}

function groupAddEventListener(element) {
    element.addEventListener("click", displayOperation);
}

function displayOperation(event) {
    const buttonPressed = event.currentTarget;
    let userInput = document.getElementById("user-input");
    let currentResult = document.getElementById("result");
    const buttonClasses = buttonPressed.classList;
    let displayedInput;
    if (buttonClasses[1] === "one") {
        arrayNum2.push("1");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "two") {
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    }  else if (buttonClasses[1] === "three") {
        arrayNum2.push("3");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "four") {
        arrayNum2.push("4");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "five") {
        arrayNum2.push("5");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "six") {
        arrayNum2.push("6");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "seven") {
        arrayNum2.push("7");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "eight") {
        arrayNum2.push("8");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "nine") {
        arrayNum2.push("9");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "zero") {
        arrayNum2.push("0");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "floating") {
        arrayNum2.push(".");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "plus") {
        if (num1 === "" || num1 === "0") {
            num1 = num2;
        } else if (operatorSign !== "" && num1 !== "" && num2 !== "") {
            num1 = operate(num1, num2, operatorSign);
            currentResult.textContent = num1;
        }
        operatorSign = "+";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "minus") {
        if (num1 === "" || num1 === "0") {
            num1 = num2;
        } else if (operatorSign !== "" && num1 !== "" && num2 !== "") {
            num1 = operate(num1, num2, operatorSign);
            currentResult.textContent = num1;
        }
        operatorSign = "-";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "multiply") {
        if (num2 === "" && num1 === "") {
            num1 = 1;
        } else if (num2 !== "" && num1 == "" && operatorSign == "") {
            num1 = num2;
        } else if (num2 !== "" && num1 !== "" && operatorSign !== "") {
            num1 = operate(num1, num2, operatorSign);
            currentResult.textContent = num1;
        }
        operatorSign = "X";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "divide") {
        if (num2 === "" && num1 === "") {
            num1 = 1;
        } else if (num2 !== "" && num1 == "" && operatorSign == "") {
            num1 = num2;
        } else if (num2 !== "" && num1 !== "" && operatorSign !== "") {
            num1 = operate(num1, num2, operatorSign);
            currentResult.textContent = num1;
        }
        operatorSign = "/";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "exe") {
        if (num1 === "" && num2 !== "") {
            updateUserInput(num1, num2, operatorSign, userInput);
            currentResult.textContent = num2;
        } else if (num1 === "" && num2 === "") {
            num2 = 0;
            updateUserInput(num1, num2, operatorSign, userInput);
            currentResult.textContent = num2;
        } else {
        let result = operate(num1, num2, operatorSign);
        updateUserInput(num1, num2, operatorSign, userInput);
        currentResult.textContent = result;
        }
        arrayNum2 = [];
        return arrayDisplay;
    }
}


function aggregateInput(previousInput, currentInput) {
    return currentInput = previousInput + currentInput;
}

function updateUserInput(num1, num2, operatorSign, userInput) {
    if (num1 < 0) {
        displayedInput = `(${num1})` + operatorSign + num2;
    } else {
        displayedInput = num1 + operatorSign + num2;
    }
    userInput.textContent = displayedInput;
}