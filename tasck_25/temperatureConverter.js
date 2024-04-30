console.log('This is the first method with static variables:');
let celsius = 1;
console.log(celsius + '°C is ' + ((celsius * 2) + 30) + '°F');
let fahrenheit = 40;
console.log(fahrenheit + '°F is ' + ((fahrenheit - 30) / 2) + '°C');

console.log('The second method with random variables:');
let celsiusRnd = Math.floor(Math.random() * 100);
console.log(celsiusRnd + '°C is ' + ((celsiusRnd * 2) + 30) + '°F');
let fahrenheitRnd = Math.floor(Math.random() * 100);
console.log(fahrenheitRnd + '°F is ' + ((fahrenheitRnd - 30) / 2) + '°C');

function convertCelsiusToFahrenheit() {
    let celsius = document.getElementById("celsiusValue").value;
    if (celsius.length === 0) {
        celsius = 0;
    }
    document.getElementById("resultValueFahrenheit").innerHTML = "" + ((celsius * 2) + 30);
}

function convertFahrenheitToCelsius() {
    let fahrenheit = document.getElementById("fahrenheitValue").value;
    if (fahrenheit.length === 0) {
        fahrenheit = 0;
    }
    document.getElementById("resultValueCelsius").innerHTML = "" + ((fahrenheit - 30) / 2);
}