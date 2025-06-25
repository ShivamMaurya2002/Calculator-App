let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}

function clearScreen() {
    currentInput = '';
    updateDisplay();
}

function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
