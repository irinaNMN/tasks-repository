// the first task
const myNumbers = [1, 5, 7, 3, 5, 5, 7, 1, 1, 3, 5, 1, 7, 5];
const arrayWithNumbers = [1, 5, 7, 3, 5, 5, 7, 1, 1, 3, 5, -1, 7];
let introducedVals = [];

console.log('--------------- the first task-------------------')
function filterDuplicates(params) {
    let uniqueArray = [];
    let maxElementArray = [];
    for (let i = 0; i < params.length; i++) {
        if (!uniqueArray.includes(params[i])) {
            uniqueArray.push(params[i]);
        }

        if (maxElementArray[params[i]] !== undefined) {
            maxElementArray[params[i]] += 1;
        } else {
            maxElementArray[params[i]] = 1;
        }
    }

    // get max value from array
    let max = maxElementArray.reduce((max, current) => {
        return Math.max(max, current);
    }, 0);

    // find array key by value
    console.log(params);
    console.log('Most frequent item from array is ' + Object.keys(maxElementArray).find(key => maxElementArray[key] === max));

    return uniqueArray;
}

console.log('Unique array values ' + filterDuplicates(myNumbers))

console.log('--------------- the second task-------------------')
// the second task
function getMinMax(arrayWithNumbers) {
    let max = 0;
    let min = 0;
    for (let i = 0; i < arrayWithNumbers.length; i++) {
        if (i === 0) {
            min = arrayWithNumbers[i];
            max = arrayWithNumbers[i];
        }
        if (arrayWithNumbers[i] > max) {
            max = arrayWithNumbers[i];
        }
        if (arrayWithNumbers[i] < min) {
            min = arrayWithNumbers[i];
        }
    }
    console.log('Get min and max from array ' + arrayWithNumbers);
    console.log('Max element ' + max);
    console.log('Min element ' + min);
}

getMinMax(arrayWithNumbers);

console.log('--------------- the third task-------------------')
// the third task

function addElementInArray() {
    let introducedNewValue = document.getElementById('introducedInformation').value;
    if (introducedNewValue !== '') {
        introducedVals.push(introducedNewValue);
    }
    document.getElementById('introducedInformation').value = '';

}

function displayElements() {
    let myMessage = '';
    for (let i = 0; i < introducedVals.length; i++) {
        myMessage += 'Element ' + i + ' = ' + introducedVals[i] + '<br>'
    }
    document.getElementById('displayMessage').innerHTML = myMessage;
}