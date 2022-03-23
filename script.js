const buttons = document.querySelectorAll("button");
buttons.forEach(groupAddEventListener);
let num1 = "";
let num2 = "";
let operatorSign = "";
let arrayNum2 =[]; 

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
        return "SNARKY ERROR MESSAGE!";
    } else {
        return divideResult;
    }
}

function operate(x, y, z) {
    let result;
    if (z === "+") {
        result = add(x, y);
    } else if (z === "-") {
        result = substract(x, y);
    } else if (z === "*") {
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
    const buttonClasses = buttonPressed.classList;
    let displayedInput;
    if (buttonClasses[1] === "one") {
        arrayNum2.push("1");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "two") {
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    }  else if (buttonClasses[1] === "three") {
        arrayNum2.push("3");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "four") {
        arrayNum2.push("4");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "five") {
        arrayNum2.push("5");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "six") {
        arrayNum2.push("6");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "seven") {
        arrayNum2.push("7");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "eight") {
        arrayNum2.push("8");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "nine") {
        arrayNum2.push("9");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "zero") {
        arrayNum2.push("0");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "plus") {
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "minus") {
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "multiply") {
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    } else if (buttonClasses[1] === "divide") {
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        displayedInput = num1 + operatorSign + num2;
        userInput.textContent = displayedInput;
        return arrayNum2;
    }
}


function aggregateInput(previousInput, currentInput) {
    return currentInput = previousInput + currentInput;
}