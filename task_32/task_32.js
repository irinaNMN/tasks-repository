// Task 1
console.log('----------------Task 1----------------')
const car = {
    name: 'audi',
    model: 'e-tron',
    year: '2024',
    color: 'red',
    fuel: 'diesel',
    start: function () {
        console.log('The car is starting')
    },
    drive: function () {
        console.log('The car is driving')
    },
    stop: function () {
        console.log('The car is stopped')
    },
    honk: function () {
        console.log('Honk Honk!')
    }
}
console.log(car)

//Task 2
console.log('----------------Task 2----------------')
const recipe = {
    title: 'Greek salad',
    servings: 4,
    ingredients: ['4 large vine tomatoes, cut into irregular wedges', '1 cucumber, peeled, deseeded, then roughly chopped',
        '½ a red onion thinly sliced', '16 Kalamata olives', '1 tsp dried oregano', '85g feta cheese, cut into chunks (barrel ' +
        'matured feta is the best)', '4 tbsp Greek extra virgin olive oil'],
}
console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients \n' + recipe.ingredients.join('\n'));

//Task3
console.log('-----------------Task3-------------------')
let bookList = [
    {
        title: 'Murder on the orient express',
        author: 'Agatha Christie',
        alreadyRead: true,
    },
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        alreadyRead: false,
    },
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        alreadyRead: false,
    },
    {
        title: 'Game of Thrones',
        author: 'George R. R. Martin',
        alreadyRead: false,
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        alreadyRead: true,
    }
];
bookList.forEach((book) => {
    if (book.alreadyRead) {
        console.log('You already read ' + book.title + ' by ' + book.author)
    } else {
        console.log('You still need to read ' + book.title + ' by ' + book.author)
    }

})