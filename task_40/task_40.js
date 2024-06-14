console.log('--------the 1-st task-------------');

function safeDivide() {
    let firstIntroducedNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondIntroducedNumber = parseFloat(document.getElementById('secondNumber').value);
    try {
        if (secondIntroducedNumber === 0) {
            throw 'Error: divided by zero'
        }
        let divisionOfNumbers = firstIntroducedNumber / secondIntroducedNumber;
        console.log('Result of division:', divisionOfNumbers);
        document.getElementById('divisionResult').innerText = divisionOfNumbers;
    } catch (exception) {
        console.log('An error occurred:', exception);
        document.getElementById('divisionResult').innerText = exception;
    }
}

console.log('--------the 2-nd task-------------');

function safeArrayAccess() {
    const anArray = [10, 20, 30, 40, 50];
    let introducedNumber = parseFloat(document.getElementById('introducedNumber').value);
    try {
        if (anArray[introducedNumber] === undefined) {
            throw document.getElementById('resultValue').innerText = 'Error: this order number does not exist'
        }
        document.getElementById('resultValue').innerText = anArray[introducedNumber];
    } catch (e) {
        console.log(e)
    }
}


console.log('--------the 3-th task-------------');

function validateJsonStructure(jsonString, requiredProperties) {
    try {
        let parsedObject = JSON.parse(jsonString);
        if (parsedObject && typeof parsedObject === 'object') {
            for (let prop of requiredProperties) {
                if (!parsedObject.hasOwnProperty(prop)) {
                    return false
                }
            }
            return parsedObject;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

let jsonString = '{"name": "Ann", "age": 25}';
let requiredProperties = ["name", "age"];
console.log(validateJsonStructure(jsonString, requiredProperties));
