initializeCalculator();

function initializeCalculator() {                               // Afin de protéger ses variables "globales", on peut créer une fonction qui englobe TOUT Le code, y compris la définition des autres fonctions.
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
        document.addEventListener("keydown", retrieveKey);
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
        element.addEventListener("click", retrieveButton);
    }

    function retrieveButton(event) {
        const buttonPressed = event.currentTarget;
        const buttonClasses = buttonPressed.classList;
        if (buttonClasses[1] === "one") {
            displayOperation(1);
        } else if (buttonClasses[1] === "two") {
            displayOperation(2);
        } else if (buttonClasses[1] === "three") {
            displayOperation(3);
        } else if (buttonClasses[1] === "four") {
            displayOperation(4);
        } else if (buttonClasses[1] === "five") {
            displayOperation(5);
        } else if (buttonClasses[1] === "six") {
            displayOperation(6);
        } else if (buttonClasses[1] === "seven") {
            displayOperation(7);
        } else if (buttonClasses[1] === "eight") {
            displayOperation(8);
        } else if (buttonClasses[1] === "nine") {
            displayOperation(9);
        } else if (buttonClasses[1] === "zero") {
            displayOperation(0);
        } else if (buttonClasses[1] === "floating") {
            displayOperation("dot");
        } else if (buttonClasses[1] === "plus") {
            displayOperation("+");
        } else if (buttonClasses[1] === "minus") {
            displayOperation("-");
        } else if (buttonClasses[1] === "multiply") {
            displayOperation("*");
        } else if (buttonClasses[1] === "divide") {
            displayOperation("/");
        } else if (buttonClasses[1] === "exe") {
            displayOperation("EXE");
        } else if (buttonClasses[1] === "backspace") {
            displayOperation("ARROW");
        } else if (buttonClasses[1] === "clear") {
            displayOperation("AC");
        } else if (buttonClasses[0] === "random") {
            displayOperation("RAN");
        } else if (buttonClasses[0] === "original") {
            displayOperation("ORI");
        } 
    }

    function retrieveKey(event) {
        if (event.key === "1") {
            displayOperation(1);
            const linkedButton = document.querySelector(".one");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "2") {
            displayOperation(2);
            const linkedButton = document.querySelector(".two");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "3") {
            displayOperation(3);
            const linkedButton = document.querySelector(".three");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "4") {
            displayOperation(4);
            const linkedButton = document.querySelector(".four");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "5") {
            displayOperation(5);
            const linkedButton = document.querySelector(".five");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "6") {
            displayOperation(6);
            const linkedButton = document.querySelector(".six");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "7") {
            displayOperation(7);
            const linkedButton = document.querySelector(".seven");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "8") {
            displayOperation(8);
            const linkedButton = document.querySelector(".eight");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "9") {
            displayOperation(9);
            const linkedButton = document.querySelector(".nine");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "0") {
            displayOperation(0);
            const linkedButton = document.querySelector(".zero");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === ".") {
            displayOperation("dot");
            const linkedButton = document.querySelector(".floating");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "+") {
            displayOperation("+");
            const linkedButton = document.querySelector(".plus");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "-") {
            displayOperation("-");
            const linkedButton = document.querySelector(".minus");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "*") {
            displayOperation("*");
            const linkedButton = document.querySelector(".multiply");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "/") {
            displayOperation("/");
            const linkedButton = document.querySelector(".divide");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "Enter") {
            displayOperation("EXE");
            const linkedButton = document.querySelector(".exe");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "Backspace") {
            displayOperation("ARROW");
            const linkedButton = document.querySelector(".backspace");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } else if (event.key === "Escape") {
            displayOperation("AC");
            const linkedButton = document.querySelector(".clear");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        }  else if (event.key === "r") {
            displayOperation("RAN");
            const linkedButton = document.querySelector(".random");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        }  else if (event.key === "o") {
            displayOperation("ORI");
            const linkedButton = document.querySelector(".original");
            linkedButton.classList.toggle("keyPressed");
            setTimeout(unpressButton, 70, linkedButton); 
        } 
    }

    function unpressButton(linkedButton) {
        linkedButton.classList.toggle("keyPressed");
    }

    function displayOperation(inputNumber) {
        let userInput = document.getElementById("user-input");
        let currentResult = document.getElementById("result");
        if (inputNumber === 1) {
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
        } else if (inputNumber === 2) {
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
        }  else if (inputNumber === 3) {
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
        } else if (inputNumber === 4) {
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
        } else if (inputNumber === 5) {
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
        } else if (inputNumber === 6) {
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
        } else if (inputNumber === 7) {
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
        } else if (inputNumber === 8) {
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
        } else if (inputNumber === 9) {
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
        } else if (inputNumber === 0) {
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
        } else if (inputNumber === "dot") {
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
        } else if (inputNumber === "+") {
            if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
                num1 = 0;
            } else if (operatorSign === "/" && num2 === "0") {
                updateResult("I AM ERROR", currentResult);
                arrayNum2 = [];
                return isExeLast = 1;                                           // Ce retour simule la pression de la touche EXE car on veut réinitialiser la calculatrice en cas d'erreur, comme avec l'EXE.
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
        } else if (inputNumber === "-") {
            if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
                num1 = 0;
            } else if (operatorSign === "/" && num2 === "0") {
                updateResult("I AM ERROR", currentResult);
                arrayNum2 = [];
                return isExeLast = 1;                                           // Ce retour simule la pression de la touche EXE car on veut réinitialiser la calculatrice en cas d'erreur, comme avec l'EXE.
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
        } else if (inputNumber === "*") {
            if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
                num1 = 0;
            } else if (operatorSign === "/" && num2 === "0") {
                updateResult("I AM ERROR", currentResult);
                arrayNum2 = [];
                return isExeLast = 1;                                           // Ce retour simule la pression de la touche EXE car on veut réinitialiser la calculatrice en cas d'erreur, comme avec l'EXE.
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
        } else if (inputNumber === "/") {
            if ((num2 === "" && num1 === "") || currentResult.textContent === "I AM ERROR") {
                num1 = 0;
            } else if (operatorSign === "/" && num2 === "0") {
                updateResult("I AM ERROR", currentResult);
                arrayNum2 = [];
                return isExeLast = 1;                                           // Ce retour simule la pression de la touche EXE car on veut réinitialiser la calculatrice en cas d'erreur, comme avec l'EXE.
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
        } else if (inputNumber === "EXE") {
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
        } else if (inputNumber === "ARROW") {
            if (arrayNum2.length !== 0) {                               // Apparemment (arrayNum2 !== []) ne permet pas de tester si un array est vide.
                let arrayNum2LastSpot = arrayNum2.length - 1;
                arrayNum2.splice(arrayNum2LastSpot, 1);
                num2 = arrayNum2.reduce(aggregateInput, "");
                updateUserInput(num1, num2, operatorSign, userInput);
                return isExeLast = 0;
            } else {
                return isExeLast = 0;
            }
        } else if (inputNumber === "AC") {
            num1 = "";
            num2 = "";
            operatorSign = "";
            arrayNum2 = [];
            currentResult.textContent = "";
            updateUserInput(num1, num2, operatorSign, userInput);
            return isExeLast = 0;
        } else if (inputNumber === "RAN") {
            const calculatorBody = document.getElementById("calculator-body");
            let randomColor = "#";
            let randomValue;
            for (let i = 0; i < 6; i++) {                       // On veut 6 itérations pour faire un code HEX complet, on entre donc i < 6.
                randomValue = Math.floor(Math.random()*16);     // On a 16 possibilités de caractères différentes pour chaque caractère du code HEX, donc on multiplie le random par 16.
                if (randomValue == 0) {
                    randomColor += "0";
                } else if (randomValue == 1) {
                    randomColor += "1";
                } else if (randomValue == 2) {
                    randomColor += "2";
                } else if (randomValue == 3) {
                    randomColor += "3";
                } else if (randomValue == 4) {
                    randomColor += "4";
                } else if (randomValue == 5) {
                    randomColor += "5";
                } else if (randomValue == 6) {
                    randomColor += "6";
                } else if (randomValue == 7) {
                    randomColor += "7";
                } else if (randomValue == 8) {
                    randomColor += "8";
                } else if (randomValue == 9) {
                    randomColor += "9";
                } else if (randomValue == 10) {
                    randomColor += "a";
                } else if (randomValue == 11) {
                    randomColor += "b";
                } else if (randomValue == 12) {
                    randomColor += "c";
                } else if (randomValue == 13) {
                    randomColor += "d";
                } else if (randomValue == 14) {
                    randomColor += "e";
                } else if (randomValue == 15) {
                    randomColor += "f";
                }
            }
            calculatorBody.style.backgroundColor = `${randomColor}`;
        } else if (inputNumber === "ORI") {
            const calculatorBody = document.getElementById("calculator-body");
            calculatorBody.style.backgroundColor = "#78bea6";
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

}