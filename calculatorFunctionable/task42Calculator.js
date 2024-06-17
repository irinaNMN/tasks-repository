let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function setOperation(oper) {
    if (currentNumber === '') {
        return;
    }
    operation = oper;
    previousNumber = currentNumber;
    currentNumber = '';
}

function performArithmeticOperation() {
    return new Promise((resolve, reject) => {
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        if (isNaN(prev) || isNaN(current)) {
            return reject(new Error('Invalid numbers'));
        }
        let result;
        switch (operation) {
            case 'add':
                result = prev + current;
                break;
            case 'subtract':
                result = prev - current;
                break;
            case 'multiply':
                result = prev * current;
                break;
            case 'divide':
                if (current === 0) {
                    return reject(new Error('Division by zero is not allowed'));
                }
                result = prev / current;
                break;
            default:
                return reject(new Error('Invalid operation;'));
        }
        currentNumber = result.toString();
        operation = null;
        previousNumber = '';
        document.getElementById('display').value = result;
        resolve(result);
    })
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    document.getElementById('display').value = '';
}