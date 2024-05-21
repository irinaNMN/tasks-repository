//First exercise
function joinArrayWithSeparator(arrayDate, separator) {
    return arrayDate.join(separator);
}

console.log(joinArrayWithSeparator(['a', 'b', 'c', 'd'], ''));
console.log(joinArrayWithSeparator(['1', '2', '3', '4'], ', '));

//Second exercise
function processOrder(input) {
    if (typeof input === 'number') {
        return parseInt(input.toString().split(' ').reverse().join(''));
    } else if (typeof input === 'string') {
        return input.split('').sort().join('');
    } else {
        return 'unknown input type';
    }
}

console.log(processOrder(33490275));
console.log(processOrder('house'));