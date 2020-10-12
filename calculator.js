const operators = {
    ADD: "add",
    SUBTRACT: "subtract",
    MULTIPLY: "multiply",
    DIVIDE: "divide"
}

var operator = "";
var num1 = null;
var num2 = null;
var display = "";
var readyForNum2 = false;

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

function invert() {
    display *= -1;
    updateDisplay();
}

function percentage() {
    display /= 100;
    updateDisplay();
}

function clearAll() {
    operator = "";
    num1 = null;
    num2 = null;
    readyForNum2 = false;

    display = "0";
    updateDisplay();
}

function operate() {
    let result = 0;
    if (num1 != null && operator != '') {
        num2 = Number(display);

        switch(operator) {
            case operators.ADD:
                result = add(num1, num2);
                console.log(`ADD (${num1}, ${num2}) for result: ${result}`);
                console.log(`TYPEOF num1: ${typeof num1}; TYPEOF num2: ${typeof num2}; TYPEOF result: ${result}`);
            break;
    
            case operators.SUBTRACT:
                result = subtract(num1, num2);
            break;
    
            case operators.MULTIPLY:
                result = multiply(num1, num2);
            break;
    
            case operators.DIVIDE:
                result = divide(num1, num2);
            break;
        }

        num2 = null;
        operator = '';

        display = result;
    
        num1 = result;
    
        updateDisplay();
    }
}

function setNumber(num) {
    if (!readyForNum2) {
        if (display == "0") {
            display = num;
        } else {
            display += num;
        }
    } else {
        display = num;
        readyForNum2 = false;
    }

    updateDisplay();
}

function setOperator(op) {
    operator = op;
    console.log(`Operator set to value of op: ${op}`);

    num1 = Number(display);

    readyForNum2 = true;
}

function updateDisplay() {
    display = display.toString();
    if (display.length > 1 && display.substring(0,1) == '0') {
        display = display.replace('0', '');
    }
    document.getElementById('display').textContent = display;
}