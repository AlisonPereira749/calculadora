const numberButtons = document.querySelectorAll("[data-number]")
const OperationButtons = document.querySelectorAll("[data-operator]")
const equalsButtons = document.querySelector("[data-equals]")
const deleteButtons = document.querySelectorAll("[data-delete]")
const allClearButtons = document.querySelectorAll("[data-all-clear]")
const previousOperandButtonsTextElement = document.querySelectorAll("[data-previous-operand]")
const currentOperandButtonsTextElement = document.querySelectorAll("[data-current-operand]")

class Calculator {
    constructor(previousOperandButtonsTextElement, currentOperandButtonsTextElement) {
        this.previousOperandButtonsTextElement = previousOperandButtonsTextElement;
        this.currentOperandButtonsTextElement = currentOperandButtonsTextElement;
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousOperandButtonsTextElement.innerText = this.previousOperand;
        this.currentOperandButtonsTextElement.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(
    previousOperandButtonsTextElement,
    currentOperandButtonsTextElement
);

