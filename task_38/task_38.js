//////////////////////////////
console.log('---------The 1st task----------')

class Car {
    constructor(make, model, year, speed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    accelerate() {
        return this.speed * 10;
    }

    brake() {
        return this.speed / 7;
    }

    currentSpeed() {
        return this.speed;
    }
}

const myCar = new Car("Renault", "Scenic", 2018, 190);
console.log(myCar);
console.log('The accelerate of the car is: ' + myCar.accelerate()); // Outputs: 1900
console.log('The brake speed is: ' + myCar.brake());
console.log('The current speed is: ' + myCar.currentSpeed());

//////////////////////////////
console.log('---------The 2nd task----------')

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    introduce() {
        /*return 'My name is ' + this.firstName + ' ' + this.lastName + ' and I am ' + this.age + ' years old';*/
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`;
    }

    setEmail(newEmail) {
        return this.email = newEmail;
    }

    getEmail() {
        return this.email;
    }
}

const myPerson1 = new Person("Cretu", "Maria", "25", "cretuMaria@mail.com");
console.log(myPerson1);
console.log(myPerson1.introduce());
myPerson1.setEmail('irina@mail.com');
console.log(myPerson1.getEmail());

const myPerson2 = new Person('Plesca', 'Nelu', '15', 'nelu@mail.md');
console.log(myPerson2);
console.log(myPerson2.introduce());
myPerson2.setEmail('neluPlesca@mail.com');
console.log(myPerson2.getEmail());

//////////////////////////////
console.log('---------The 3th task----------')

class BankAccount {
    _privateAccountNumber = 0;
    #privateBalance = 0;

    constructor(accountNumber, balance, accountType) {
        this._privateAccountNumber = accountNumber;
        this.#privateBalance = balance;
        this.accountType = accountType;
    }

    deposit(i) {
        return i + this.#privateBalance;
    }

    withdraw(i) {
        return this.#privateBalance - i;
    }

    checkBalance() {
        return this.#privateBalance;
    }

    set privateAccountNumber(i) {
        this._privateAccountNumber = i;
    }

    get privateAccountNumber() {
        return this._privateAccountNumber;
    }
}

const myBankAccount = new BankAccount('a1234b', 500, 'public');
console.log(myBankAccount);
console.log(`This is my deposit: ${myBankAccount.deposit(250)}`);
console.log(`This is my Bank account: ${myBankAccount.withdraw(10)}`);
console.log(`This is the check balance: ${myBankAccount.checkBalance()}`);
console.log(`This is the set private account number: ${myBankAccount.privateAccountNumber = 9}`);
console.log(`This is the private account number: ${myBankAccount.privateAccountNumber}`);