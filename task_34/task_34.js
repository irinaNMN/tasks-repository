/////task1

console.log('---------the 1st task----------');
let monthName = function (dates) {
    monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];
    return monthList[dates.getMonth()];
};
console.log('Month name from a particular date: \n ' + monthName(new Date("10/2/2014")));

///task2
console.log('---------the 2nd task----------');

function sameWeekDay(date1, date2) {
    let firstsDate = new Date(date1);
    let secondDate = new Date();
    const dayOne = firstsDate.getDay();
    const dayTwo = secondDate.getDay();
    return dayOne === dayTwo;
}

let dateOne = '2024-05-30';
let dateTwo = '2024-06-06';
console.log('Check if two dates: ' + dateOne + ' and ' + dateTwo + ' fall on the same week day:  \n' +
    sameWeekDay(dateOne, dateTwo));

///task3
console.log('---------the 3nd task----------')
let date1 = new Date("05/16/2024");
let date2 = new Date("06/26/2024");
let differenceInTime = date2.getTime() - date1.getTime();
let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
console.log('Total number of days between dates: \n' + date1.toDateString() + ' and ' + date2.toDateString() +
    ' is: ' + differenceInDays + ' days.')

///task5
console.log('---------the 5nd task----------');
const arrayOfDates = [
    new Date('2023/11/01'),
    new Date('2023/11/02'),
    new Date('2023/11/03'),
    new Date('2023/11/04')
]
console.log(new Date(Math.min(...arrayOfDates)));