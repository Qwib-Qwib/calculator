placeEventListeners();

let num1 = "";
let num2 = "";
let operatorSign = "";
let arrayNum2 = []; 
let arrayDisplay = [num1, operatorSign, num2, arrayNum2];
let isExeLast = 0;

function placeEventListeners() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(groupAddEventListener);
}

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
    if (buttonClasses[1] === "one") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "1";
            operatorSign = "";
            arrayNum2 = ["1"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("1");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "two") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "2";
            operatorSign = "";
            arrayNum2 = ["2"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("2");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    }  else if (buttonClasses[1] === "three") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "3";
            operatorSign = "";
            arrayNum2 = ["3"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("3");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "four") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "4";
            operatorSign = "";
            arrayNum2 = ["4"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("4");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "five") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "5";
            operatorSign = "";
            arrayNum2 = ["5"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("5");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "six") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "6";
            operatorSign = "";
            arrayNum2 = ["6"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("6");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "seven") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "7";
            operatorSign = "";
            arrayNum2 = ["7"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("7");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "eight") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "8";
            operatorSign = "";
            arrayNum2 = ["8"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("8");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "nine") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "9";
            operatorSign = "";
            arrayNum2 = ["9"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("9");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "zero") {
        if (isExeLast === 1) {
            num1 = "";
            num2 = "0";
            operatorSign = "";
            arrayNum2 = ["0"];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
        arrayNum2.push("0");
        num2 = arrayNum2.reduce(aggregateInput);
        updateUserInput(num1, num2, operatorSign, userInput);
        return arrayDisplay;
    } else if (buttonClasses[1] === "floating") {
        if (arrayNum2.includes(".")) {
            return;
        } else if (isExeLast === 1) {
            num1 = "";
            num2 = "0.";
            operatorSign = "";
            arrayNum2 = ["0", "."];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        } else if (arrayNum2.length === 0) {
            arrayNum2.push("0");
            arrayNum2.push(".");
            num2 = arrayNum2.reduce(aggregateInput);
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        } else {
            arrayNum2.push(".");
            num2 = arrayNum2.reduce(aggregateInput);
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        }
    } else if (buttonClasses[1] === "plus") {
        if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
            num1 = 0;
        } else if (num1 === "" || num1 === "0") {
            num1 = num2;
        } else if (operatorSign !== "" && num1 !== "" && num2 !== "") {
            num1 = operate(num1, num2, operatorSign);
            updateResult(num1, currentResult);
        }
        operatorSign = "+";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return isExeLast = 0;
    } else if (buttonClasses[1] === "minus") {
        if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
            num1 = 0;
        } else if (num1 === "" || num1 === "0") {
            num1 = num2;
        } else if (operatorSign !== "" && num1 !== "" && num2 !== "") {
            num1 = operate(num1, num2, operatorSign);
            updateResult(num1, currentResult);
        }
        operatorSign = "-";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return isExeLast = 0;
    } else if (buttonClasses[1] === "multiply") {
        if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
            num1 = 0;
        } else if (num2 !== "" && num1 == "" && operatorSign == "") {
            num1 = num2;
        } else if (num2 !== "" && num1 !== "" && operatorSign !== "") {
            num1 = operate(num1, num2, operatorSign);
            updateResult(num1, currentResult);
        }
        operatorSign = "X";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return isExeLast = 0;
    } else if (buttonClasses[1] === "divide") {
        if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
            num1 = 0;
        } else if (num2 !== "" && num1 == "" && operatorSign == "") {
            num1 = num2;
        } else if (num2 !== "" && num1 !== "" && operatorSign !== "") {
            num1 = operate(num1, num2, operatorSign);
            updateResult(num1, currentResult);
        }
        operatorSign = "/";
        num2 = "";
        arrayNum2 = [];
        updateUserInput(num1, num2, operatorSign, userInput);
        return isExeLast = 0;
    } else if (buttonClasses[1] === "exe") {
        if (num1 === "" && num2 !== "") {                           //L'utilisateur ne fait qu'entrer un chiffre et presse EXE.
            updateUserInput(num1, num2, operatorSign, userInput);
            updateResult(num2, currentResult);
        } else if (num1 === "" && num2 === "") {                    //L'utilisateur ne presse rien.
            num2 = 0;
            updateUserInput(num1, num2, operatorSign, userInput);
            updateResult(num2, currentResult);
        } else if (num2 === "") {                                   //L'utilisateur presse un opérateur (soir après un chiffre, soit seul) puis rien.
            num2 = 0;
            let result = operate(num1, num2, operatorSign);
            updateUserInput(num1, num2, operatorSign, userInput);
            updateResult(result, currentResult);
        } else {
            let result = operate(num1, num2, operatorSign);
            updateUserInput(num1, num2, operatorSign, userInput);
            updateResult(result, currentResult);
        }
        arrayNum2 = [];
        return isExeLast = 1;
    } else if (buttonClasses[1] === "backspace") {
        if (arrayNum2.length !== 0) {                               // Apparemment (arrayNum2 !== []) ne permet pas de tester si un array est vide.
            let arrayNum2LastSpot = arrayNum2.length - 1;
            arrayNum2.splice(arrayNum2LastSpot, 1);
            num2 = arrayNum2.reduce(aggregateInput, "");
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        } else {
            return isExeLast = 0;
        }
    } else if (buttonClasses[1] === "clear") {
        num1 = "";
        num2 = "";
        operatorSign = "";
        arrayNum2 = [];
        currentResult.textContent = "";
        updateUserInput(num1, num2, operatorSign, userInput);
        return isExeLast = 0;
    }
}


function aggregateInput(previousInput, currentInput) {
    return currentInput = previousInput + currentInput;
}

function updateUserInput(num1, num2, operatorSign, userInput) {
    let displayedInput = num1 + operatorSign + num2;
    if (num1 < 0 && displayedInput.length < 10) {
        displayedInput = `(${num1})` + operatorSign + num2;
    } else if (displayedInput.length >= 10 && num2.length < 5 && num1 > 0) {
        displayedInput = Number(num1).toPrecision(1) + operatorSign + num2;
    } else if (displayedInput.length >= 10 && num2.length < 5 && num1 < 0) {
        displayedInput = `(${Number(num1).toPrecision(1)})` + operatorSign + num2;
    } else if (displayedInput.length >= 10 && num2.length >= 5 && num1 > 0) {
        displayedInput = Number(num1).toPrecision(1) + operatorSign + Number(num2).toPrecision(1);
    } else if (displayedInput.length >= 10 && num2.length >= 5 && num1 < 0) {
        displayedInput = `(${Number(num1).toPrecision(1)})` + operatorSign + Number(num2).toPrecision(1);
    } else if (num2.length >= 10) {
        displayedInput = num1 + operatorSign + Number(num2).toPrecision(6);
    } else {
        displayedInput = num1 + operatorSign + num2;
    }
    userInput.textContent = displayedInput;
}

function updateResult(result, currentResult) {
    if (result === "I AM ERROR") {
        currentResult.textContent = result;
    } else if(result.toString().length >= 10) {
        currentResult.textContent = Number(result).toPrecision(7);
    } else {
        currentResult.textContent = Number(result);
    }
}