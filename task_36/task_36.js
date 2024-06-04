console.log('----- The 1st task -----------')
console.log('This is the string: My 4text123')
function extractNumberFromString(text) {
    let pattern = /\d+/g;
    return text.match(pattern)
}
console.log('Extract numbers from a string:')
console.log(extractNumberFromString('My 4text123'));

////////////////////////////////////////////
console.log('----- The 2nd task ----------');

// "Asa Ty uI oo ppp Po JJ"
function findCapitalizedWords(str) {
    let splitString = str.split(' ');
    let pattern = /^[A-Z]/;
    let result = [];
    for (let i = 0; i < splitString.length; i++) {
        if (pattern.test(splitString[i])) {
            result.push(splitString[i])
        }
    }
    return result;
}

console.log('This is array of words: "Asa Ty uI oo ppp Po JJ"');
console.log('words that start with a capital letter:')
console.log(findCapitalizedWords("Asa Ty ur oo ppp Po JJ"));

////////////////////////////////////////////
console.log('----- The 3th task ----------');

function validateDateFormat(dateStr) {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateStr.match(regEx) != null;
}

console.log('Validate date format according to special format as for example: YYYY-MM-DD:');
console.log('1991-05-24 : ');
console.log(validateDateFormat('1991-05-24'));
console.log('20-05-1990 : ');
console.log(validateDateFormat('20-05-1990'));

////////////////////////////////////////////
console.log('----- The 4th task ----------');
let myWords = 'I am not gonna live forever, but I wanna live while I am alive'

function findDuplicateWords(str) {
    let myWords = str.split(' ');
    let wordMap = {};

    for (let i = 0; i < myWords.length; i++) {
        let currentWordCount = wordMap[myWords[i]];
        let count = currentWordCount ? currentWordCount : 0;
        wordMap[myWords[i]] = count + 1;
    }
    console.log(wordMap);

    let result = [];
    Object.entries(wordMap).forEach((value) => {
        if (value[1] > 1) {
            result.push(value[0])
        }
    })
    return result;
}

console.log('This is the string: I am not gonna live forever, but I wanna live while I am alive');
console.log('This is an array of duplicate words of string: ');
console.log(findDuplicateWords(myWords));

////////////////////////////////////////////

console.log('----- The 5th task ----------');
let emailAddress = 'myEmail@gmail.com';
const domainFromEmail = emailAddress.split('@')[1];
console.log('This is the email: ' + emailAddress);
console.log('the domain of this email is: ');
console.log(domainFromEmail);