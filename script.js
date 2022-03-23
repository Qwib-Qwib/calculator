const buttons = document.querySelectorAll("button");
buttons.forEach(groupAddEventListener);
let arrayInput =[]; 

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
        arrayInput.push("1");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "two") {
        arrayInput.push("2");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    }  else if (buttonClasses[1] === "three") {
        arrayInput.push("3");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "four") {
        arrayInput.push("4");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "five") {
        arrayInput.push("5");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "six") {
        arrayInput.push("6");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "seven") {
        arrayInput.push("7");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "eight") {
        arrayInput.push("8");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "nine") {
        arrayInput.push("9");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "plus") {
        arrayInput.push("2");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "minus") {
        arrayInput.push("2");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "multiply") {
        arrayInput.push("2");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    } else if (buttonClasses[1] === "divide") {
        arrayInput.push("2");
        displayedInput = arrayInput.reduce(aggregateInput);
        userInput.textContent = displayedInput;
        return arrayInput;
    }
}


function aggregateInput(previousInput, currentInput) {
    return currentInput = previousInput + currentInput;
}