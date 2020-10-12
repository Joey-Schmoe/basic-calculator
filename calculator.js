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

    display = "0";
    updateDisplay();
}

function operate() {
    let result = 0;

    switch(operator) {
        case operators.ADD:
            num1 = Number(num1);
            num2 = Number(num2);

            result = num1 + num2;
            display = result;

            console.log(`Running ADD operation. Num1: ${num1}, Num2: ${num2}, Operator: ${operator}. RESULT: ${result}`);
            
            num1 = result;

            updateDisplay();

            

            num2 = null;
            operator = '';
        break;

        case operators.SUBTRACT:

        break;

        case operators.MULTIPLY:

        break;

        case operators.DIVIDE:

        break;

    }
}

function setNumber(num) {
    if (operator == '') {
        num1 = num;

    } else {
        num2 = num;
    }

    display += num;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    console.log(`Operator set to value of op: ${op}`);
}

function updateDisplay() {
    display = display.toString();
    if (display.length > 1 && display.substring(0,1) == '0') {
        display = display.replace('0', '');
    }
    document.getElementById('display').textContent = display;
}