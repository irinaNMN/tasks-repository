//task1
console.log('--------Task1 - window size----------');
window.addEventListener('resize', function (event) {
    console.log('Height of window' + event.target.innerHeight)
    console.log('Width of window' + event.target.innerWidth)
}, true);

//task2
console.log('--------Task2 - capitalize first letter----------');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('this is my text!'));

//task3
console.log('--------Task3 - sort an array by a given property-------');
const staticArray = [
    {
        id: 1,
        name: 'candy',
        order: 5,
        price: 123,
        outOfStock: true,
    },
    {
        id: 2,
        name: 'chocolate',
        order: 3,
        price: 234,
        outOfStock: false,
    },
    {
        id: 3,
        name: 'acookie',
        order: 4,
        price: 33,
        outOfStock: true,
    }
]

function sortByName(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

staticArray.sort(sortByName);
console.log('sort by name: ')
console.log(staticArray);

function sortByOrder(elem1, elem2) {
    if (elem1.order < elem2.order) {
        return -1;
    }
    if (elem1.order > elem2.order) {
        return 1;
    }
    return 0;
}

staticArray.sort(sortByOrder);
console.log('sort by order: ')
console.log(staticArray);

//task5
console.log('--------Task5 - ----------');
const students = [
    {
        name: 'Anna',
        scores: [9, 7, 10, 9, 8],
    },
    {
        name: 'Inna',
        scores: [8, 6, 8, 10, 8],
    },
    {
        name: 'Nelu',
        scores: [9, 8, 10, 8, 9],
    },
    {
        name: 'Marcel',
        scores: [10, 9, 9, 10, 7],
    },
]

console.log('---------Task 5.1----------------------');
console.log('The average score for each student and added new property averageScore')
students.forEach((student, index) => {
    let average = student.scores.reduce((a, b) => a + b, 0)
    student.averageScore = average / student.scores.length
})
console.log(students);

console.log('---------Task 5.2----------------------');
console.log('Filter out students whose average score is less than given threshold')
let threshold = 8.5;
let media = students.filter(student => student.averageScore > threshold);
console.log(media);

console.log('---------Task 5.3----------------------');
console.log('Sorted the students by their average score in descending order')
media.sort((a, b) => parseFloat(b.averageScore) - parseFloat(a.averageScore));
console.log(media)