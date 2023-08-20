

let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function removeLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}