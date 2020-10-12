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

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function invert () {

}

function percentage () {

}

function clear () {
    operator = "";
    num1 = null;
    num2 = null;

    display = 0;
    updateDisplay();
}

function operate() {
    switch(operator) {
        case operators.ADD:

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
    if (num1 == null) {
        num1 = num;
    } else {
        num2 = num;
    }

    display += num;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
}

function updateDisplay() {
    document.getElementById('display').textContent = display;
}