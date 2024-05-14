const givenNumber = 13

function numberDifference() {
    let number = document.getElementById("enteredNumber").value;
    if (number <= givenNumber) {
        document.getElementById("resultOfDifference").innerHTML = "" + (number - givenNumber);
    } else {
        document.getElementById("resultOfDifference").innerHTML = (number - givenNumber) * 2;
    }
}

function checkNumber() {
    document.getElementById('kindOfNumber').innerHTML = '';
    let introduceFirstNumber = document.getElementById("enterFirstNumber").value;
    let introduceSecondNumber = document.getElementById("enterSecondNumber").value;
    if ((introduceFirstNumber < 0) || (introduceSecondNumber < 0)) {
        document.getElementById("kindOfNumber").innerHTML = 'one of inserted number is negative';
    }
    if (introduceFirstNumber > 0 && introduceSecondNumber > 0) {
        document.getElementById("kindOfNumber").innerHTML = 'both of inserted numbers are positive';
    }
    if ((introduceFirstNumber < 0) && (introduceSecondNumber < 0)) {
        document.getElementById("kindOfNumber").innerHTML = 'both of inserted numbers are negative';
    }
}

function operationOfMultiply() {
    let myFirstNumber = document.getElementById("firstNumber").value;
    let mySecondNumber = document.getElementById("secondNumber").value;
    document.getElementById("showResult").innerHTML = "The result is " + (myFirstNumber * mySecondNumber);
}

function operationOfDivide() {
    let myFirstNumber = document.getElementById("firstNumber").value;
    let mySecondNumber = document.getElementById("secondNumber").value;
    document.getElementById("showResult").innerHTML = 'The result is ' + (myFirstNumber / mySecondNumber);
}
function operationofReset() {
    document.getElementById("showResult").innerHTML = "";
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
}
