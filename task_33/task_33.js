let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.w3schools.com/jsref/jsref_join.asp"
}
console.log('--------Task 1-------------')

function addNewLanguage(lang) {
    programming.languages.push(lang);
}

addNewLanguage("Go");
console.log(programming.languages);
console.log('---------------------')
programming.difficulty = 7;
console.log(programming.difficulty);
console.log('---------------------')
delete programming.jokes;
console.log(programming);
console.log('---------------------')
programming.isFun = true;
console.log(programming);
console.log('---------------------')
programming.languages.forEach((language) => {
    console.log(language)
})
console.log('---------------------')
for (const [key, value] of Object.entries(programming)) {
    console.log(key);
}
console.log('---------------------')
for (const [key, value] of Object.entries(programming)) {
    console.log(value);
}

console.log('--------Task 2-------------')

let book = {
    title: 'Death on the Nile',
    author: 'Agatha Christie',
    pages: 450,
    currentPage: 76,
    read: function (pageNumber) {
        this.currentPage += pageNumber;
        console.log('Reading ' + this.currentPage + ' pages');
    },
    checkPage: function () {
        console.log(this.currentPage);
    },
    checkPercentage: function () {
        console.log(((this.currentPage - this.pages) / this.pages) * 100);
    },
    isRead: function () {
        if (this.pages === this.currentPage) {
            console.log('This book is read');
        } else {
            console.log('This book is not read yet');
        }
    }
}
book.read(45)
book.isRead()
console.log(book)

console.log('--------Task 3-------------')

let rectangle = {
    width: 20,
    height: 30,
    get perimeter() {
        return (this.width + this.height) * 2;
    },
    get area() {
        return this.width * this.height;
    },
    set changeWidth(newWidth) {
        if (newWidth >= 0) {
            this.width = newWidth;
        }
    },
    set changeHeight(newHeight) {
        if (newHeight >= 0) {
            this.height = newHeight;
        }
    }
}
console.log(rectangle)
console.log('Perimeter of rectangle: ' + '(' + rectangle.width + ' + ' + rectangle.height + ')' + ' * 2' + ' = ' +
    rectangle.perimeter);
console.log('Area of rectangle: ' + rectangle.width + ' * ' + rectangle.height + ' = ' + rectangle.area);
rectangle.width = 34;
rectangle.height = 15;
console.log('width is ' + rectangle.width + ' and ' + 'height is ' + rectangle.height)
